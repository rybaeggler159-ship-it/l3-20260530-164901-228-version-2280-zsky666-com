(function () {
  var menuButton = document.querySelector('.menu-toggle');
  var mobilePanel = document.querySelector('.mobile-panel');

  if (menuButton && mobilePanel) {
    menuButton.addEventListener('click', function () {
      mobilePanel.classList.toggle('is-open');
    });
  }

  var hero = document.querySelector('[data-hero]');

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
    var current = 0;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        showSlide(index);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        showSlide(current + 1);
      }, 5200);
    }
  }

  var searchInput = document.querySelector('.js-local-search');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.searchable-grid .movie-card, .searchable-grid .rank-item'));
  var chips = Array.prototype.slice.call(document.querySelectorAll('.filter-chip'));
  var params = new URLSearchParams(window.location.search);
  var initialQuery = params.get('q') || '';

  function textFor(card) {
    return [
      card.dataset.title,
      card.dataset.genre,
      card.dataset.region,
      card.dataset.type,
      card.dataset.year,
      card.dataset.tags
    ].join(' ').toLowerCase();
  }

  function applyFilter(value) {
    var query = (value || '').trim().toLowerCase();
    cards.forEach(function (card) {
      var matched = textFor(card).indexOf(query) !== -1;
      card.classList.toggle('is-hidden-card', !matched);
    });
  }

  if (searchInput && cards.length) {
    searchInput.value = initialQuery;
    applyFilter(initialQuery);
    searchInput.addEventListener('input', function () {
      applyFilter(searchInput.value);
    });
  }

  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (item) {
          item.classList.remove('active');
        });
        chip.classList.add('active');
        if (searchInput) {
          searchInput.value = chip.dataset.filter || '';
        }
        applyFilter(chip.dataset.filter || '');
      });
    });
  }

  var video = document.querySelector('.movie-video');
  var playButton = document.querySelector('.js-play-button');
  var playerState = document.querySelector('.player-state');
  var hlsInstance = null;

  function setPlayerState(text) {
    if (playerState) {
      playerState.textContent = text || '';
    }
  }

  function startPlayer() {
    if (!video || !window.playerConfig || !window.playerConfig.streamUrl) {
      return;
    }

    var streamUrl = window.playerConfig.streamUrl;

    if (playButton) {
      playButton.classList.add('is-hidden');
    }

    setPlayerState('加载中');

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      if (video.src !== streamUrl) {
        video.src = streamUrl;
      }
      video.play().then(function () {
        setPlayerState('');
      }).catch(function () {
        setPlayerState('点击视频继续播放');
      });
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      if (!hlsInstance) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hlsInstance.loadSource(streamUrl);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
          video.play().then(function () {
            setPlayerState('');
          }).catch(function () {
            setPlayerState('点击视频继续播放');
          });
        });
        hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
          if (data && data.fatal) {
            setPlayerState('播放暂时不可用');
          }
        });
      } else {
        video.play().then(function () {
          setPlayerState('');
        }).catch(function () {
          setPlayerState('点击视频继续播放');
        });
      }
      return;
    }

    setPlayerState('播放暂时不可用');
  }

  if (playButton) {
    playButton.addEventListener('click', startPlayer);
  }

  if (video) {
    video.addEventListener('click', function () {
      if (!video.src) {
        startPlayer();
      }
    });
    video.addEventListener('playing', function () {
      setPlayerState('');
    });
  }
})();
