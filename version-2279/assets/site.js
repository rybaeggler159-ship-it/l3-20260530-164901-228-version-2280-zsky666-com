(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function setupMenu() {
    var button = document.querySelector("[data-menu-button]");
    var nav = document.querySelector("[data-mobile-nav]");
    if (!button || !nav) {
      return;
    }
    button.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  function setupHeroSlider() {
    var slider = document.querySelector("[data-hero-slider]");
    if (!slider) {
      return;
    }
    var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-dot]"));
    var prev = slider.querySelector("[data-hero-prev]");
    var next = slider.querySelector("[data-hero-next]");
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === current);
        slide.setAttribute("aria-hidden", i === current ? "false" : "true");
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    if (prev) {
      prev.addEventListener("click", function () {
        show(current - 1);
        start();
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        show(current + 1);
        start();
      });
    }
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        show(index);
        start();
      });
    });
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function normalized(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function setupFilters() {
    var scopes = Array.prototype.slice.call(document.querySelectorAll("[data-filter-scope]"));
    var inputs = Array.prototype.slice.call(document.querySelectorAll("[data-page-search]"));
    if (!scopes.length || !inputs.length) {
      return;
    }
    var params = new URLSearchParams(window.location.search);
    var initial = params.get("q") || "";
    inputs.forEach(function (input) {
      if (initial && !input.value) {
        input.value = initial;
      }
    });

    function filter(value) {
      var query = normalized(value);
      scopes.forEach(function (scope) {
        var cards = Array.prototype.slice.call(scope.querySelectorAll("[data-search]"));
        cards.forEach(function (card) {
          var haystack = normalized(card.getAttribute("data-search"));
          card.classList.toggle("is-hidden", query && haystack.indexOf(query) === -1);
        });
      });
    }

    inputs.forEach(function (input) {
      input.addEventListener("input", function () {
        filter(input.value);
      });
    });
    filter(initial);
  }

  function setupImages() {
    Array.prototype.slice.call(document.images).forEach(function (image) {
      image.addEventListener("error", function () {
        image.classList.add("image-hidden");
      }, { once: true });
    });
  }

  window.initMoviePlayer = function (source) {
    ready(function () {
      var video = document.getElementById("movie-player");
      var cover = document.getElementById("play-cover");
      if (!video || !source) {
        return;
      }
      var loaded = false;
      var hls = null;

      function attach() {
        if (loaded) {
          return;
        }
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = source;
          loaded = true;
          return;
        }
        if (window.Hls && window.Hls.isSupported()) {
          hls = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hls.loadSource(source);
          hls.attachMedia(video);
          loaded = true;
          return;
        }
        video.src = source;
        loaded = true;
      }

      function hideCover() {
        if (cover) {
          cover.classList.add("is-hidden");
        }
      }

      function play() {
        attach();
        hideCover();
        var playback = video.play();
        if (playback && playback.catch) {
          playback.catch(function () {});
        }
      }

      if (cover) {
        cover.addEventListener("click", play);
      }
      video.addEventListener("click", function () {
        if (video.paused) {
          play();
        }
      });
      video.addEventListener("play", hideCover);
      window.addEventListener("beforeunload", function () {
        if (hls) {
          hls.destroy();
        }
      });
    });
  };

  ready(function () {
    setupMenu();
    setupHeroSlider();
    setupFilters();
    setupImages();
  });
})();
