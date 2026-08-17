/* slop presentation engine: desktop bg, window manager, glossary, clips, Q&A */
(function () {
  const IPFS = cid => `https://media.slop.computer/ipfs/${cid}`;
  // deep link into an episode page at a moment (the player honors ?t=)
  const EP_URL = (slug, t) => `https://slop.computer/${slug}?t=${Math.max(0, Math.floor(t))}`;
  const MMSS = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

  /* ---- background ---- */
  function paintBg() {
    const bg = document.createElement('div');
    bg.className = 'desktop-bg';
    let stars = '';
    for (let i = 0; i < 90; i++) {
      const big = i % 12 === 0 ? ' big' : '';
      stars += `<span class="star${big}" style="left:${(i * 37.7) % 100}%;top:${(i * 53.3) % 100}%"></span>`;
    }
    bg.innerHTML = `
      <div class="base"></div><div class="glow"></div>
      <svg><defs><pattern id="dot" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="1" height="1" fill="#7c4dff" opacity="0.7"></rect>
        <rect x="3" y="3" width="1" height="1" fill="#3fcfff" opacity="0.5"></rect>
      </pattern></defs><rect width="100%" height="100%" fill="url(#dot)"></rect></svg>
      ${stars}<div class="scan"></div>`;
    document.body.prepend(bg);
  }

  /* ---- section watermark + background tint ---- */
  // setSection({label, color}) — the section name bottom-right in the EXACT
  // treatment of slop.computer's front-page wordmark: ANSI Shadow figlet art
  // (window.ASCII_MARKS, pregenerated), monospace stack, lineHeight 1, colored,
  // scaled to fit. Background glow shifts to the section color.
  const ASCII_FONT_STACK = "'SF Mono','Cascadia Code','Fira Code','JetBrains Mono','Menlo','Consolas',monospace";
  function setSection(sec) {
    let el = document.getElementById('sectionmark');
    if (!el) {
      el = document.createElement('div');
      el.id = 'sectionmark';
      el.style.cssText = 'position:fixed;right:22px;bottom:30px;z-index:3000;pointer-events:none;' +
        `font-family:${ASCII_FONT_STACK};font-size:16px;line-height:1;white-space:pre;` +
        'text-align:left;transform-origin:bottom right;transition:opacity .35s;opacity:0';
      document.body.appendChild(el);
    }
    const glow = document.querySelector('.desktop-bg .glow');
    if (!sec || !sec.label) {
      el.style.opacity = '0';
      if (glow) glow.style.background = '';
      return;
    }
    const c = sec.color || '#ff3ec9';
    const art = (window.ASCII_MARKS || {})[sec.label.toLowerCase()];
    if (art) {
      el.textContent = art.replace(/^\n+|\s+$/g, '');
      // scale the fixed-16px block to fit ~45% of the viewport width
      const cols = Math.max(...el.textContent.split('\n').map(l => l.length));
      const natural = cols * 9.6; // ~monospace advance at 16px
      el.style.transform = `scale(${Math.min(1, (innerWidth * 0.34) / natural)})`;
    } else {
      el.textContent = sec.label.toUpperCase();
      el.style.transform = '';
    }
    el.style.color = c;
    el.style.textShadow = `0 0 18px ${c}66`;
    el.style.opacity = '0.55';
    if (glow) glow.style.background =
      `radial-gradient(ellipse 70% 50% at 50% 30%, ${c}1f 0%, transparent 70%),` +
      `radial-gradient(ellipse 55% 45% at 82% 88%, ${c}24 0%, transparent 70%)`;
  }

  /* ---- window manager ---- */
  let z = 100;
  const layer = () => document.getElementById('winlayer') || document.body;

  function mkWindow(title, html, opt = {}) {
    const w = document.createElement('div');
    w.className = 'win';
    w.style.left = (opt.x ?? 60) + 'px';
    w.style.top = (opt.y ?? 60) + 'px';
    if (opt.w) w.style.width = opt.w + 'px';
    if (opt.h) w.style.height = opt.h + 'px';
    w.style.zIndex = ++z;
    w.innerHTML = `<div class="bar"><span class="dot"></span><span class="t">${title}</span></div><div class="body"></div>`;
    if (typeof html === 'string') w.querySelector('.body').innerHTML = html;
    else w.querySelector('.body').appendChild(html);
    if (opt.pad === 0) w.querySelector('.body').style.padding = '0';

    const focus = () => {
      document.querySelectorAll('.win.focus').forEach(o => o.classList.remove('focus'));
      w.classList.add('focus');
      w.style.zIndex = ++z;
    };
    w.addEventListener('pointerdown', focus);
    focus();

    // drag by title bar
    const bar = w.querySelector('.bar');
    bar.addEventListener('pointerdown', e => {
      if (e.target.classList.contains('dot')) return;
      const sx = e.clientX - w.offsetLeft, sy = e.clientY - w.offsetTop;
      const mv = ev => { w.style.left = (ev.clientX - sx) + 'px'; w.style.top = (ev.clientY - sy) + 'px'; };
      const up = () => { removeEventListener('pointermove', mv); removeEventListener('pointerup', up); };
      addEventListener('pointermove', mv); addEventListener('pointerup', up);
      e.preventDefault();
    });
    w.querySelector('.dot').addEventListener('click', () => closeWindow(w));
    layer().appendChild(w);
    return w;
  }

  function closeWindow(w) {
    w.classList.add('closing');
    setTimeout(() => w.remove(), 120);
  }
  function closeAll() {
    document.querySelectorAll('.win:not(.pinned)').forEach(closeWindow);
  }

  /* ---- clip window ---- */
  function clipWindow(clip, opt = {}) {
    const el = document.createElement('div');
    el.innerHTML = `
      <video controls preload="none" poster="${IPFS(clip.poster)}" src="${IPFS(clip.video)}"></video>
      <div style="padding:8px 10px;font-family:var(--disp);font-size:10px;display:flex;gap:8px;align-items:baseline" class="muted">
        <span style="flex:1">${clip.ep} · ${Math.round(clip.durationSec)}s · <span style="color:var(--slop-lime)">${(clip.speakers || []).join(' + ')}</span></span>
        ${typeof clip.t === 'number' ? `<a href="${EP_URL(clip.ep, clip.t)}" target="_blank" rel="noopener" style="color:var(--slop-cyan);text-decoration:none;white-space:nowrap">ep @ ${MMSS(clip.t)} ↗</a>` : ''}
      </div>`;
    const w = mkWindow('📼 ' + clip.title, el, { pad: 0, w: opt.w ?? 300, ...opt });
    const v = el.querySelector('video');
    // clicking the video surface must SELECT the window, not toggle playback
    // (Chrome's native click-to-toggle fights the spacebar control) — clicks on
    // the bottom control strip still pass through untouched.
    v.addEventListener('click', e => {
      if (e.offsetY < v.getBoundingClientRect().height - 48) e.preventDefault();
    });
    // never let the video hold keyboard focus — space belongs to the deck
    v.tabIndex = -1;
    v.addEventListener('focus', () => v.blur());
    if (opt.autoplay) { v.muted = false; v.play().catch(() => {}); }
    return w;
  }

  /* ---- moments window: quotes that deep-link into episodes at ?t= ---- */
  // moments: [{ep, t, who, quote}] — each row opens slop.computer/<ep>?t=<t-lead>
  function momentsWindow(moments, opt = {}) {
    const LEAD = 6; // land a few seconds before the line so it plays into the quote
    const rows = moments.map(m => `
      <a class="moment" href="${EP_URL(m.ep, m.t - LEAD)}" target="_blank" rel="noopener"
         style="display:block;text-decoration:none;color:inherit;padding:7px 2px;border-bottom:1px dashed #7c4dff33">
        <span style="font-size:13px;line-height:1.45">“${m.quote}”</span><br>
        <span style="font-family:var(--disp);font-size:9px;color:var(--slop-lime)">${m.who}</span>
        <span style="font-family:var(--disp);font-size:9px" class="muted"> · ${m.ep}</span>
        <span style="font-family:var(--disp);font-size:9px;color:var(--slop-cyan)"> @ ${MMSS(m.t)} ↗</span>
      </a>`).join('');
    return mkWindow(opt.title || '⛓ from the tapes',
      `<div style="max-height:48vh;overflow:auto">${rows}</div>`, { w: 440, ...opt });
  }

  /* ---- glossary ---- */
  function bindGlossary(root) {
    (root || document).querySelectorAll('.g').forEach(el => {
      if (el._g) return; el._g = 1;
      el.addEventListener('click', e => {
        e.stopPropagation();
        const term = el.dataset.term || el.textContent.trim().toLowerCase();
        const g = (window.GLOSSARY || []).find(t => t.term.toLowerCase() === term);
        if (!g) return;
        mkWindow('📖 ' + g.term, `<div class="tag">glossary</div><p class="quote" style="font-size:15px">${g.tldr}</p>`,
          { x: e.clientX - 40, y: Math.min(e.clientY + 20, innerHeight - 220), w: 340 });
      });
    });
  }

  /* ---- Q&A window (stub — wire to /api/ask on vercel) ---- */
  function qaWindow(opt = {}) {
    const el = document.createElement('div');
    el.innerHTML = `
      <div id="qalog" style="min-height:120px;max-height:280px;overflow:auto;margin-bottom:10px">
        <p class="muted" style="margin:0 0 8px">ask about anything from the 42 episodes.</p>
      </div>
      <form id="qaf" style="display:flex;gap:8px">
        <input class="slop" placeholder="ask clawd…" autocomplete="off">
        <button class="slop" type="submit">▶</button>
      </form>`;
    const w = mkWindow('🦞 ask clawd', el, { w: 420, ...opt });
    const log = el.querySelector('#qalog');
    el.querySelector('#qaf').addEventListener('submit', async e => {
      e.preventDefault();
      const inp = el.querySelector('input');
      const q = inp.value.trim(); if (!q) return;
      inp.value = '';
      log.innerHTML += `<p style="margin:6px 0;color:var(--slop-cyan)">&gt; ${q}</p>`;
      const a = document.createElement('p');
      a.style.cssText = 'margin:6px 0';
      a.textContent = '…';
      log.appendChild(a); log.scrollTop = 1e6;
      const dots = setInterval(() => { a.textContent = a.textContent.length > 12 ? '\u{1F99E} thinking' : a.textContent + '.'; }, 900);
      a.textContent = '\u{1F99E} thinking';
      try {
        a.textContent = await askUpstream(q);
      } catch {
        a.innerHTML = `<span class="muted">[clawd is offline \u2014 no local agent and no backend answered.]</span>`;
      }
      clearInterval(dots);
      log.scrollTop = 1e6;
    });
    return w;
  }

  /* localhost-first: when presenting from a machine running agent/server.py
     (claude -p on subscription), answers come straight off that box; everyone
     else falls back to the site's /api/ask. */
  async function askUpstream(q) {
    const post = (url) => fetch(url, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ q }), signal: AbortSignal.timeout(90_000),
    });
    try {
      const h = await fetch('http://localhost:8899/health', { signal: AbortSignal.timeout(1200) });
      if (h.ok) {
        const r = await post('http://localhost:8899/ask');
        if (r.ok) return (await r.json()).answer;
      }
    } catch {}
    const r = await post('/api/ask');
    if (!r.ok) throw 0;
    return (await r.json()).answer;
  }

  window.SLOP = { paintBg, setSection, mkWindow, closeWindow, closeAll, clipWindow, momentsWindow, bindGlossary, qaWindow, IPFS, EP_URL, askUpstream };
})();
