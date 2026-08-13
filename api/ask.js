// POST /api/ask {q} → {answer}
// Forwards to ask-clawd: `claude -p` (claude-p-agent pattern) running on
// Austin's relay box on SUBSCRIPTION billing — no metered API key anywhere.
// Needs ASK_SECRET set in Vercel env (matches ~/ask-clawd/.env on the box).

export const config = { maxDuration: 90 };

const UPSTREAM = process.env.ASK_UPSTREAM || "https://h.atg.link/ask";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const secret = process.env.ASK_SECRET;
  if (!secret) return res.status(500).json({ error: "ASK_SECRET not configured" });
  const q = (req.body?.q || "").slice(0, 500).trim();
  if (!q) return res.status(400).json({ error: "no question" });
  try {
    const r = await fetch(UPSTREAM, {
      method: "POST",
      headers: { "content-type": "application/json", "X-Ask-Secret": secret },
      body: JSON.stringify({ q }),
      signal: AbortSignal.timeout(85_000),
    });
    const body = await r.json().catch(() => ({ error: "clawd glitched. try again." }));
    return res.status(r.status).json(body);
  } catch {
    return res.status(504).json({ error: "clawd took too long. try again." });
  }
}
