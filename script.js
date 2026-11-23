(() => {
  const C = CONTENT;
  const $ = (s, r = document) => r.querySelector(s);
  const stage = $('#stage');
  let p = 0;

  /* ---------- page renderers: each returns [leftPage, rightPage] ---------- */
  const pic = (src, alt = '') => (src ? `<img src="${src}" alt="${alt}">` : '');

  const about = () => [
    `<div class="pg l center rise"><div class="portrait">
      <div class="card" id="card" tabindex="0" role="button" aria-label="Flip photo card">
        <div class="card-in">
          <div class="face front">
            ${C.photo ? `<img class="ph" src="${C.photo}" alt="Portrait of ${C.name}">` : `<div class="blob"></div><div class="initials">${C.initials}</div>`}
            <div class="glare"></div>
            <div class="cap"><span>${C.photo ? C.name : '[Your photo]'}</span><span>Click to flip</span></div>
          </div>
          <div class="face back">
            <p class="mono" style="color:#BDB8AD">Off the clock</p>
            <div>${C.offstage.map((t, i) => `<p class="q"${i === 1 ? ' style="font-style:italic"' : ''}>${t}</p>`).join('')}</div>
            <p class="mono" style="color:#E0603D">Click to flip back</p>
          </div>
        </div>
      </div>
      <div class="sticker"><svg viewBox="0 0 100 100" width="96" height="96" aria-hidden="true"><defs><path id="cc" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/></defs><text font-size="10" fill="currentColor" font-family="JetBrains Mono,monospace"><textPath href="#cc" textLength="222" lengthAdjust="spacing">${C.status.toUpperCase()} ✦ ${C.status.toUpperCase()} ✦</textPath></text></svg></div>
    </div></div>`,
    `<div class="pg r rise">
      <p class="label mono"><span class="dot"></span>${C.status} · Chapter 01</p>
      <h2 class="h2">Hey, I’m ${C.name}. <em>${C.about.lead}</em></h2>
      <p class="body">${C.about.bio}</p>
      <div class="cta"><button class="btn mono solid" data-go="3">Explore my work</button><button class="btn mono" data-go="7">Get in touch</button></div>
      <div class="facts">${C.facts.map(([k, v]) => `<div class="fact"><div class="mono">${k}</div><div>${v}</div></div>`).join('')}</div>
    </div>`
  ];

  const contents = () => {
    const toc = [['About me', 1], ['What I do', 2], ['Selected work', 3], ['Beyond the code', 5], ['Skills and workflow', 6], ['Contact', 7]];
    return [
      `<div class="pg l rise">
        <p class="label mono">Contents</p>
        <h2 class="h2" style="margin-bottom:32px">What’s <em>inside.</em></h2>
        ${toc.map(([l, g], i) => `<button class="toc" data-go="${g}"><span class="mono">0${i + 1}</span><span class="t">${l}</span><span class="mono">p. ${g * 2}</span></button>`).join('')}
        <div class="rule"></div>
      </div>`,
      `<div class="pg r rise">
        <p class="label mono">What I do · tap to open</p>
        <h2 class="h3">A few things, <em>done well.</em></h2>
        ${C.does.map((d, i) => `<button class="acc${i === 0 ? ' open' : ''}"><span class="acc-head"><span class="acc-title">${d.title}</span><span class="plus mono">+</span></span><span class="acc-body">${d.text}</span></button>`).join('')}
        <div class="rule"></div>
      </div>`
    ];
  };

  const project = (i) => {
    const c = C.projects[i];
    return [
      `<div class="pg l rise">
        <p class="label mono">Chapter 02 · Case 0${i + 1}</p>
        <h2 class="h2" style="margin-bottom:8px">${c.name}</h2>
        <p class="tag mono">${c.tag}</p>
        <p class="body">${c.blurb}</p>
        <div class="kv"><span class="mono">Problem</span><p>${c.problem}</p></div>
        <div class="kv"><span class="mono">Approach</span><p>${c.approach}</p></div>
        <div class="kv rule-b"><span class="mono">Result</span><p>${c.result}</p></div>
      </div>`,
      `<div class="pg r rise">
        <div class="shot">${c.image ? pic(c.image, 'Screenshot of ' + c.name) : `<span class="mono">[Screenshot of ${c.name}]</span>`}</div>
        <div style="margin-bottom:8px">${c.stack.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
        <p class="meta"><span class="mono">Role</span>${c.role}</p>
        <p class="meta" style="margin-bottom:24px"><span class="mono">Timeline</span>${c.timeline}</p>
        <a class="btn mono" href="${c.link}">Visit live site ↗</a>
      </div>`
    ];
  };

  const beyond = () => [
    `<div class="pg l rise">
      <p class="label mono">Chapter 03 · Beyond the code</p>
      <h2 class="h2">A few interests, <em>one way of thinking.</em></h2>
      <p class="body">${C.beyond.p1}</p><p class="body" style="margin-bottom:24px">${C.beyond.p2}</p>
      <p class="mono" style="color:var(--accent)">Tap a tile to enlarge it →</p>
    </div>`,
    `<div class="pg r rise"><div class="grid">${C.interests.map((t, i) => `<button class="tile${i === 0 ? ' big' : ''}" style="--m:${8 + (i % 3) * 5}%">${pic(t.image, t.label)}<span class="mono tl">${t.label}</span></button>`).join('')}</div></div>`
  ];

  const skills = () => [
    `<div class="pg l rise">
      <p class="label mono">Chapter 04 · Skills</p>
      <h2 class="h2" style="margin-bottom:28px">The tools I <em>reach for.</em></h2>
      ${C.skills.map((g) => `<div class="group"><p class="mono">${g.group}</p>${g.items.map((s) => `<span class="chip">${s}</span>`).join('')}</div>`).join('')}
    </div>`,
    `<div class="pg r rise">
      <p class="label mono">Chapter 05 · Workflow</p>
      <h2 class="h3">From idea to <em>live.</em></h2>
      ${C.steps.map((s, i) => `<div class="step"><span class="n mono">0${i + 1}</span><div><div class="ti">${s.title}</div><div class="tx">${s.text}</div></div></div>`).join('')}
    </div>`
  ];

  const contact = () => [
    `<div class="pg l rise">
      <p class="label mono">Chapter 06 · Contact</p>
      <h2 class="h2" style="font-size:clamp(36px,4.6vw,64px);line-height:1">Have a problem <em>worth solving?</em></h2>
      <p class="body" style="margin-bottom:28px">${C.contactLine}</p>
      <a class="btn mono" href="mailto:${C.email}">${C.email}</a>
      <div class="links">${C.links.map((l) => `<a class="mono" href="${l.href}">${l.label}</a>`).join('')}</div>
    </div>`,
    `<div class="pg r end rise">
      <p class="label mono">The end</p>
      <p class="serif" style="font:italic 300 clamp(34px,4vw,56px)/1.05 'Fraunces',serif">Thank you for reading.</p>
      <button class="btn mono" data-go="0">← Back to the cover</button>
      <p class="mono" style="color:var(--muted);margin-top:24px">© ${C.year} ${C.name}</p>
    </div>`
  ];

  const PAGES = [
    { label: 'Cover' }, { label: 'About me', r: about }, { label: 'Contents and what I do', r: contents },
    { label: 'Case study one', r: () => project(0) }, { label: 'Case study two', r: () => project(1) },
    { label: 'Beyond the code', r: beyond }, { label: 'Skills and workflow', r: skills }, { label: 'Contact', r: contact }
  ];
  const MAX = PAGES.length - 1;

  /* ---------- static pieces ---------- */
  const tickText = C.ticker.join(' ✦ ') + ' ✦';
  $('#tick').innerHTML = Array(4).fill(`<span>${tickText}</span>`).join('');
  $('#cover').innerHTML = `
    <div class="cover"><div class="cover-in">
      <span class="mono">Selected works · ${C.year}</span>
      <div><h1>${C.name}</h1><p class="sub">${C.role}</p></div>
      <span class="mono">${C.city}</span>
    </div></div>
    <button class="btn mono" data-go="1">Open the book →</button>`;
  document.title = `${C.name} | ${C.role}`;
  $('#dots').innerHTML = PAGES.map((pg, i) => `<button class="dot-btn" data-go="${i}" aria-label="Go to ${pg.label}"><span></span></button>`).join('');

  /* ---------- navigation ---------- */
  function go(n) {
    p = Math.max(0, Math.min(MAX, n));
    $('#cover').hidden = p !== 0;
    $('#book').hidden = p === 0;
    $('#controls').hidden = p === 0;
    if (p > 0) {
      const [l, r] = PAGES[p].r();
      $('#page').innerHTML = `<div class="spread flip">${l}${r}</div>`;
      bindPage();
    }
    document.querySelectorAll('.dot-btn').forEach((b, i) => b.classList.toggle('on', i === p));
    $('#next').disabled = p === MAX;
  }

  /* ---------- per-page interactions ---------- */
  function bindPage() {
    const card = $('#card');
    if (card) {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--cx', ((e.clientX - r.left) / r.width).toFixed(3));
        card.style.setProperty('--cy', ((e.clientY - r.top) / r.height).toFixed(3));
        card.classList.add('hov');
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--cx', .5); card.style.setProperty('--cy', .5); card.classList.remove('hov');
      });
      const flip = () => card.style.setProperty('--flip', card.style.getPropertyValue('--flip') === '1' ? 0 : 1);
      card.addEventListener('click', flip);
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
    }
    const accs = document.querySelectorAll('.acc');
    accs.forEach((a) => a.addEventListener('click', () => {
      const was = a.classList.contains('open');
      accs.forEach((x) => x.classList.toggle('open', x === a && !was));
    }));
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((t) => t.addEventListener('click', () => tiles.forEach((x) => x.classList.toggle('big', x === t))));
  }

  /* ---------- global events ---------- */
  document.addEventListener('click', (e) => {
    const g = e.target.closest('[data-go]');
    if (g) go(+g.dataset.go);
  });
  $('#prev').addEventListener('click', () => go(p - 1));
  $('#next').addEventListener('click', () => go(p + 1));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') go(p + 1);
    if (e.key === 'ArrowLeft' && p > 0) go(p - 1);
  });

  stage.addEventListener('mousemove', (e) => {
    const r = stage.getBoundingClientRect();
    stage.style.setProperty('--mx', ((e.clientX - r.left) / r.width).toFixed(3));
    stage.style.setProperty('--my', ((e.clientY - r.top) / r.height).toFixed(3));
  });
  stage.addEventListener('click', (e) => {
    const r = stage.getBoundingClientRect();
    const b = document.createElement('div');
    b.className = 'burst';
    b.style.left = e.clientX - r.left + 'px';
    b.style.top = e.clientY - r.top + 'px';
    b.innerHTML = '<span class="ring"></span><span class="ring r2"></span>';
    $('#bursts').appendChild(b);
    setTimeout(() => b.remove(), 1000);
  });

  /* ---------- theme ---------- */
  const themeBtn = $('#theme');
  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    themeBtn.textContent = dark ? 'Light page' : 'Dark page';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (_) {}
  }
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  setTheme(saved === 'dark');
  themeBtn.addEventListener('click', () => setTheme(document.documentElement.dataset.theme !== 'dark'));

  go(0);
})();
