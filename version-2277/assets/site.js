
(function(){
  const demoStream = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function byId(id){
    return (window.SITE_DATA.movies || []).find(m => m.id === Number(id));
  }

  function escapeHtml(s){
    return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  function truncate(text, len){
    text = String(text || "");
    return text.length > len ? text.slice(0, len - 1) + "…" : text;
  }

  function posterSvg(movie, w, h){
    const cat = window.SITE_DATA.categories[movie.categoryIndex] || {name:"电影"};
    const colorSets = [
      ["#ff6b6b","#ffd166"],["#6c5ce7","#74b9ff"],["#00b894","#55efc4"],["#fd79a8","#fab1a0"],["#f39c12","#f6e58d"],
      ["#d63031","#ffeaa7"],["#0984e3","#81ecec"],["#2d3436","#636e72"],["#0097e6","#a29bfe"],["#00cec9","#81ecec"]
    ];
    const c = colorSets[movie.categoryIndex % colorSets.length];
    const title = escapeHtml(movie.title);
    const year = movie.year || "";
    const region = escapeHtml(movie.region || "");
    const genre = escapeHtml(String(movie.genre || "").split(/[\/,、]/)[0].trim());
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${c[0]}"/>
            <stop offset="100%" stop-color="${c[1]}"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
        <circle cx="${Math.round(w*0.2)}" cy="${Math.round(h*0.2)}" r="${Math.round(Math.min(w,h)*0.20)}" fill="rgba(255,255,255,.20)"/>
        <circle cx="${Math.round(w*0.82)}" cy="${Math.round(h*0.78)}" r="${Math.round(Math.min(w,h)*0.24)}" fill="rgba(255,255,255,.12)"/>
        <rect x="${Math.round(w*0.07)}" y="${Math.round(h*0.07)}" width="${Math.round(w*0.86)}" height="${Math.round(h*0.86)}" rx="${Math.round(Math.min(w,h)*0.05)}" fill="rgba(0,0,0,.16)" stroke="rgba(255,255,255,.18)"/>
        <rect x="${Math.round(w*0.10)}" y="${Math.round(h*0.73)}" width="${Math.round(w*0.80)}" height="${Math.round(h*0.15)}" rx="18" fill="rgba(15,23,42,.28)"/>
        <text x="${Math.round(w*0.10)}" y="${Math.round(h*0.18)}" font-size="${Math.round(Math.min(w,h)*0.06)}" font-family="Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif" fill="#fff" font-weight="700">${title.slice(0, 14)}</text>
        <text x="${Math.round(w*0.10)}" y="${Math.round(h*0.28)}" font-size="${Math.round(Math.min(w,h)*0.027)}" font-family="Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif" fill="rgba(255,255,255,.9)">${region} · ${year} · ${genre}</text>
        <text x="${Math.round(w*0.10)}" y="${Math.round(h*0.82)}" font-size="${Math.round(Math.min(w,h)*0.03)}" font-family="Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif" fill="#fff" opacity=".95">#${escapeHtml(cat.name)}</text>
        <text x="${Math.round(w*0.90)}" y="${Math.round(h*0.15)}" text-anchor="end" font-size="${Math.round(Math.min(w,h)*0.03)}" font-family="Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif" fill="rgba(255,255,255,.86)" font-weight="700">ASIA</text>
      </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  function cardHtml(movie){
    const poster = posterSvg(movie, 600, 900);
    const tags = (movie.tags || []).slice(0, 3).map(t => `<span class="pill dark">${escapeHtml(t)}</span>`).join("");
    return `
      <article class="card">
        <a href="movie-${String(movie.id).padStart(4,'0')}.html" aria-label="${escapeHtml(movie.title)}">
          <div class="poster">
            <span class="badge">${escapeHtml(movie.year)} · ${escapeHtml(movie.categoryName)}</span>
            <img loading="lazy" src="${poster}" alt="${escapeHtml(movie.title)} 海报">
          </div>
        </a>
        <div class="card-body">
          <h3 class="card-title"><a href="movie-${String(movie.id).padStart(4,'0')}.html">${escapeHtml(movie.title)}</a></h3>
          <div class="card-meta">${tags}</div>
          <div class="mini">${escapeHtml(truncate(movie.oneLine, 80))}</div>
          <div class="card-actions">
            <div class="mini-row">
              <span>${escapeHtml(movie.region)}</span>
              <span>${escapeHtml(String(movie.genre || "").split(/[\/,、]/)[0] || "")}</span>
            </div>
            <a class="link" href="movie-${String(movie.id).padStart(4,'0')}.html">查看详情</a>
          </div>
        </div>
      </article>
    `;
  }

  function rankHtml(movie, index){
    const poster = posterSvg(movie, 220, 330);
    return `
      <div class="rank-item">
        <div class="rank-no">${index + 1}</div>
        <a href="movie-${String(movie.id).padStart(4,'0')}.html" style="width:88px;flex:0 0 auto">
          <img loading="lazy" src="${poster}" alt="${escapeHtml(movie.title)} 海报" style="border-radius:16px;overflow:hidden">
        </a>
        <div style="min-width:0;flex:1">
          <h3><a href="movie-${String(movie.id).padStart(4,'0')}.html">${escapeHtml(movie.title)}</a></h3>
          <div class="mini-row" style="margin-bottom:8px">
            <span>${escapeHtml(movie.region)}</span>
            <span>${escapeHtml(movie.type)}</span>
            <span>${escapeHtml(movie.year)}</span>
          </div>
          <div class="mini">${escapeHtml(truncate(movie.oneLine, 92))}</div>
        </div>
      </div>
    `;
  }

  function initNavActive(){
    const path = location.pathname.split('/').pop() || 'index.html';
    qsa('.nav-links a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href === path) a.classList.add('active');
      if ((path === '' || path === 'index.html') && href === 'index.html') a.classList.add('active');
    });
  }

  function initSearchForms(){
    qsa('form[data-search-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('input[name="q"]');
        const q = encodeURIComponent((input && input.value || '').trim());
        location.href = `search.html?q=${q}`;
      });
    });
  }

  function initHeroCarousel(){
    const carousel = qs('[data-carousel]');
    if (!carousel) return;
    const slides = qsa('[data-slide]', carousel);
    const dots = qsa('[data-dot]', carousel);
    const prev = qs('[data-prev]', carousel);
    const next = qs('[data-next]', carousel);
    let index = 0;
    let timer = null;
    function show(n){
      index = (n + slides.length) % slides.length;
      slides.forEach((s,i)=>s.classList.toggle('active', i===index));
      dots.forEach((d,i)=>d.classList.toggle('active', i===index));
    }
    function play(){
      if (timer) clearInterval(timer);
      timer = setInterval(() => show(index + 1), 5000);
    }
    if (prev) prev.addEventListener('click', ()=>{ show(index-1); play(); });
    if (next) next.addEventListener('click', ()=>{ show(index+1); play(); });
    dots.forEach((dot,i)=>dot.addEventListener('click', ()=>{ show(i); play(); }));
    carousel.addEventListener('mouseenter', ()=>{ if (timer) clearInterval(timer); });
    carousel.addEventListener('mouseleave', play);
    show(0); play();
  }

  function initHlsPlayers(){
    qsa('video.js-hls-player').forEach(video => {
      const src = video.dataset.src;
      const poster = video.getAttribute('poster') || '';
      if (!src) return;
      if (window.Hls && Hls.isSupported()) {
        const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function(){ if (poster) video.setAttribute('poster', poster); });
        hls.on(Hls.Events.ERROR, function(event, data){
          if (data && data.fatal) {
            if (data.type === Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad();
            else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError();
            else hls.destroy();
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      } else {
        const hint = video.parentElement && video.parentElement.querySelector('[data-player-hint]');
        if (hint) hint.textContent = '当前浏览器不支持 HLS 播放，可改用支持 HLS 的浏览器打开。';
      }
    });
  }

  function renderSearchPage(){
    const root = qs('[data-search-results]');
    if (!root || !window.SITE_DATA) return;
    const params = new URLSearchParams(location.search);
    const qInput = qs('[data-search-input]');
    const q = (params.get('q') || '').trim();
    if (qInput) qInput.value = q;
    const movies = window.SITE_DATA.movies || [];
    const all = movies.slice().sort((a,b) => (b.score - a.score) || (a.id - b.id));

    function filterMovies(query){
      const s = query.toLowerCase();
      if (!s) return all.slice(0, 60);
      return all.filter(m => [
        m.title,m.region,m.type,m.genre,m.oneLine,m.summary,m.review,(m.tags||[]).join(' ')
      ].join(' ').toLowerCase().includes(s)).slice(0, 120);
    }

    function render(list){
      if (!list.length){
        root.innerHTML = `<div class="notice">没有找到匹配的影片，试试其他关键词。</div>`;
        return;
      }
      root.innerHTML = `
        <div class="mini" style="margin-bottom:14px">共找到 <b>${list.length}</b> 条结果</div>
        <div class="grid-cards">${list.map(cardHtml).join('')}</div>
      `;
    }

    render(filterMovies(q));

    if (qInput) {
      qInput.addEventListener('input', () => render(filterMovies(qInput.value.trim())));
    }
    qsa('[data-filter-chip]').forEach(chip => {
      chip.addEventListener('click', e => {
        e.preventDefault();
        const val = chip.dataset.filterChip || '';
        if (qInput) qInput.value = val;
        render(filterMovies(val));
      });
    });
  }

  function renderHomeSections(){
    const featuredRoot = qs('[data-home-featured]');
    if (featuredRoot && window.SITE_DATA){
      const movies = (window.SITE_DATA.featuredIds || []).map(id => byId(id)).filter(Boolean).slice(0, 4);
      featuredRoot.innerHTML = `
        <div class="carousel-stage" data-carousel>
          ${movies.map((movie, i) => `
            <div class="carousel-slide ${i===0?'active':''}" data-slide>
              <img class="carousel-poster" src="${posterSvg(movie, 800, 1100)}" alt="${escapeHtml(movie.title)} 海报">
              <div class="carousel-content">
                <div class="chips">
                  <span class="chip">${escapeHtml(movie.categoryName)}</span>
                  <span class="chip">${escapeHtml(movie.region)}</span>
                  <span class="chip">${escapeHtml(movie.year)}</span>
                </div>
                <h2>${escapeHtml(movie.title)}</h2>
                <p>${escapeHtml(truncate(movie.oneLine, 130))}</p>
                <div class="hero-actions">
                  <a class="btn btn-primary" href="movie-${String(movie.id).padStart(4,'0')}.html">立即查看</a>
                  <a class="btn btn-ghost" href="category-${String(movie.categoryIndex+1).padStart(2,'0')}.html">进入分类</a>
                </div>
              </div>
            </div>
          `).join('')}
          <div class="carousel-controls">
            <div class="carousel-dots">${movies.map((_,i)=>`<button type="button" class="dot ${i===0?'active':''}" data-dot aria-label="切换到第${i+1}张"></button>`).join('')}</div>
            <div class="carousel-arrows">
              <button type="button" class="icon-btn" data-prev aria-label="上一张">‹</button>
              <button type="button" class="icon-btn" data-next aria-label="下一张">›</button>
            </div>
          </div>
        </div>`;
      initHeroCarousel();
    }
  }

  function renderCategoryLists(){
    qsa('[data-card-grid]').forEach(node => {
      const ids = (node.dataset.ids || '').split(',').map(s=>Number(s)).filter(Boolean);
      const movies = ids.map(id => byId(id)).filter(Boolean);
      node.innerHTML = movies.map(cardHtml).join('');
    });
  }

  function renderRankingLists(){
    const root = qs('[data-ranking-list]');
    if (root && window.SITE_DATA){
      const ids = window.SITE_DATA.rankedIds || [];
      const movies = ids.map(id => byId(id)).filter(Boolean).slice(0, 120);
      root.innerHTML = movies.map((movie, i) => rankHtml(movie, i)).join('');
    }
  }

  function initDetailRelated(){
    const relatedRoot = qs('[data-related]');
    if (!relatedRoot || !window.SITE_DATA) return;
    const id = Number(relatedRoot.dataset.movieId || 0);
    const movie = byId(id);
    if (!movie) return;
    const ids = [];
    (movie.relatedIds || []).forEach(v => { if (!ids.includes(v) && v !== movie.id) ids.push(v); });
    const sameCategory = window.SITE_DATA.movies
      .filter(m => m.categoryIndex === movie.categoryIndex && m.id !== movie.id)
      .sort((a,b)=> (b.score-a.score))
      .slice(0, 10);
    sameCategory.forEach(m => { if (!ids.includes(m.id)) ids.push(m.id); });
    const related = ids.map(byId).filter(Boolean).slice(0, 12);
    relatedRoot.innerHTML = related.map(cardHtml).join('');
  }

  function initDetailMeta(){
    const el = qs('[data-detail-movie]');
    if (!el || !window.SITE_DATA) return;
    const id = Number(el.dataset.detailMovie || 0);
    const movie = byId(id);
    if (!movie) return;
    const prev = byId(movie.id - 1);
    const next = byId(movie.id + 1);
    const prevLink = qs('[data-prev-movie]');
    const nextLink = qs('[data-next-movie]');
    if (prevLink && prev) prevLink.href = `movie-${String(prev.id).padStart(4,'0')}.html`;
    if (nextLink && next) nextLink.href = `movie-${String(next.id).padStart(4,'0')}.html`;
  }

  document.addEventListener('DOMContentLoaded', function(){
    initNavActive();
    initSearchForms();
    renderHomeSections();
    renderCategoryLists();
    renderRankingLists();
    renderSearchPage();
    initHlsPlayers();
    initDetailRelated();
    initDetailMeta();
  });
})();
