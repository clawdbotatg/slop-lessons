#!/usr/bin/env python3
"""ask-clawd — tiny HTTP wrapper around `claude -p` for the slop-lessons Q&A.

POST /ask  {"q": "..."}  + X-Ask-Secret header  →  {"answer": "..."}
GET  /health                                    →  {"ok": true}

Runs on the public relay box behind nginx (h.atg.link/ask). One claude at a
time; questions queue briefly, then 429. Subscription billing — the child
`claude -p` runs under the box's OAuth login, env scrubbed so nothing routes
to a metered key.
"""
import json, os, subprocess, threading, time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get("ASK_PORT", "8899"))
SECRET = os.environ.get("ASK_SECRET", "")
MODEL = os.environ.get("ASK_MODEL", "sonnet")
TIMEOUT = int(os.environ.get("ASK_TIMEOUT", "75"))

LOCK = threading.Semaphore(1)
WAITING = threading.Semaphore(3)  # at most 3 queued behind the running one


def scrubbed_env():
    env = dict(os.environ)
    for k in list(env):
        if k == "CLAUDECODE" or k.startswith("CLAUDE_CODE_") or k.startswith("ANTHROPIC_"):
            env.pop(k)
    return env


def ask(q: str) -> str:
    out = subprocess.run(
        ["claude", "-p", q, "--model", MODEL],
        cwd=HERE, env=scrubbed_env(), capture_output=True, text=True, timeout=TIMEOUT,
    )
    if out.returncode != 0:
        raise RuntimeError(out.stderr[:300])
    return out.stdout.strip()


class H(BaseHTTPRequestHandler):
    def _json(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("content-type", "application/json")
        self.send_header("content-length", str(len(body)))
        self._cors()
        self.end_headers()
        self.wfile.write(body)

    def _cors(self):
        # the site (https) may call this server on localhost while presenting
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "content-type, x-ask-secret")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        if self.path == "/health":
            return self._json(200, {"ok": True})
        return self._json(404, {"error": "nope"})

    def do_POST(self):
        if self.path != "/ask":
            return self._json(404, {"error": "nope"})
        # SECRET set → require it (public box). unset → local mode, bound to 127.0.0.1 only.
        if SECRET and self.headers.get("X-Ask-Secret", "") != SECRET:
            return self._json(403, {"error": "no"})
        try:
            n = min(int(self.headers.get("content-length", 0)), 4096)
            q = json.loads(self.rfile.read(n) or b"{}").get("q", "")
        except Exception:
            return self._json(400, {"error": "bad json"})
        q = "".join(c for c in str(q) if c.isprintable())[:500].strip()
        if not q:
            return self._json(400, {"error": "no question"})
        if not WAITING.acquire(blocking=False):
            return self._json(429, {"error": "clawd is swamped. try again in a minute."})
        try:
            with LOCK:
                t0 = time.time()
                answer = ask(q)
                self.log_message("answered in %.1fs: %s", time.time() - t0, q[:80])
            return self._json(200, {"answer": answer or "…i got nothing. ask me another."})
        except subprocess.TimeoutExpired:
            return self._json(504, {"error": "clawd thought too hard. shorter question?"})
        except Exception as e:
            self.log_message("ERROR %s", e)
            return self._json(500, {"error": "clawd glitched. try again."})
        finally:
            WAITING.release()


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", PORT), H).serve_forever()
