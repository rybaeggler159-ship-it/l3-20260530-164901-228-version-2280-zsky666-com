(function () {
  var menuButton = document.querySelector('.menu-toggle');
  var mobilePanel = document.querySelector('.mobile-panel');

  if (menuButton && mobilePanel) {
    menuButton.addEventListener('click', function () {
      var isOpen = mobilePanel.hasAttribute('hidden') === false;
      if (isOpen) {
        mobilePanel.setAttribute('hidden', '');
        menuButton.setAttribute('aria-expanded', 'false');
      } else {
        mobilePanel.removeAttribute('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
      }
    });
  }

  document.querySelectorAll('img').forEach(function (image) {
    image.addEventListener('error', function () {
      var holder = image.closest('.poster, .rail-poster, .rank-thumb, .side-thumb, .poster-mini');
      if (holder) {
        holder.classList.add('image-empty');
      }
      image.style.display = 'none';
    });
  });

  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('.hero-dot'));
    var next = carousel.querySelector('[data-carousel-next]');
    var prev = carousel.querySelector('[data-carousel-prev]');
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      if (!slides.length) {
        return;
      }
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
    }

    function restart() {
      if (timer) {
        clearInterval(timer);
      }
      timer = setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    if (next) {
      next.addEventListener('click', function () {
        show(index + 1);
        restart();
      });
    }

    if (prev) {
      prev.addEventListener('click', function () {
        show(index - 1);
        restart();
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        show(i);
        restart();
      });
    });

    show(0);
    restart();
  });

  var searchData = document.getElementById('search-data');
  var searchResults = document.querySelector('[data-search-results]');
  var searchTitle = document.getElementById('search-title');

  if (searchData && searchResults) {
    var params = new URLSearchParams(window.location.search);
    var query = (params.get('q') || '').trim();
    var input = document.querySelector('.big-search input[name="q"]');

    if (input && query) {
      input.value = query;
    }

    if (query) {
      try {
        var data = JSON.parse(searchData.textContent);
        var words = query.toLowerCase().split(/\s+/).filter(Boolean);
        var matches = data.filter(function (item) {
          var haystack = [item.title, item.region, item.type, item.genre, item.desc, (item.tags || []).join(' ')].join(' ').toLowerCase();
          return words.every(function (word) {
            return haystack.indexOf(word) !== -1;
          });
        }).slice(0, 120);

        if (searchTitle) {
          searchTitle.textContent = matches.length ? '“' + query + '”相关影片' : '未找到相关影片';
        }

        searchResults.innerHTML = matches.map(function (item) {
          return [
            '<article class="search-result-card">',
            '  <a class="poster-mini" href="' + escapeAttribute(item.url) + '" data-title="' + escapeAttribute(item.title) + '">',
            '    <img src="' + escapeAttribute(item.cover) + '" alt="' + escapeAttribute(item.title) + '" loading="lazy">',
            '  </a>',
            '  <div>',
            '    <h3><a href="' + escapeAttribute(item.url) + '">' + escapeHtml(item.title) + '</a></h3>',
            '    <p>' + escapeHtml(item.desc || '') + '</p>',
            '    <p class="card-meta">' + escapeHtml([item.region, item.year, item.type].filter(Boolean).join(' · ')) + '</p>',
            '  </div>',
            '</article>'
          ].join('');
        }).join('') || '<p class="empty-state">换一个关键词试试。</p>';
      } catch (error) {
        searchResults.innerHTML = '<p class="empty-state">搜索暂时不可用。</p>';
      }
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[char];
    });
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }
})();
