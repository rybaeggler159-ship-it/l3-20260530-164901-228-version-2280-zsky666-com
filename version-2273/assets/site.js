(function () {
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-menu-toggle]');

  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var hero = document.querySelector('[data-hero]');

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dotsWrap = hero.querySelector('[data-hero-dots]');
    var current = 0;
    var timer = null;

    function activate(index) {
      current = index;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === current);
      });
      if (dotsWrap) {
        Array.prototype.slice.call(dotsWrap.children).forEach(function (dot, dotIndex) {
          dot.classList.toggle('active', dotIndex === current);
        });
      }
    }

    if (dotsWrap) {
      slides.forEach(function (_, index) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.addEventListener('click', function () {
          activate(index);
          restart();
        });
        dotsWrap.appendChild(dot);
      });
    }

    function next() {
      if (slides.length > 1) {
        activate((current + 1) % slides.length);
      }
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(next, 5200);
    }

    activate(0);
    restart();
  }

  var carousels = Array.prototype.slice.call(document.querySelectorAll('[data-carousel]'));
  var leftButtons = Array.prototype.slice.call(document.querySelectorAll('[data-scroll-left]'));
  var rightButtons = Array.prototype.slice.call(document.querySelectorAll('[data-scroll-right]'));

  leftButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      var target = carousels[index] || carousels[0];
      if (target) {
        target.scrollBy({ left: -520, behavior: 'smooth' });
      }
    });
  });

  rightButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      var target = carousels[index] || carousels[0];
      if (target) {
        target.scrollBy({ left: 520, behavior: 'smooth' });
      }
    });
  });

  var filterBars = Array.prototype.slice.call(document.querySelectorAll('[data-filter-bar]'));

  filterBars.forEach(function (bar) {
    var input = bar.querySelector('[data-filter-input]');
    var category = bar.querySelector('[data-filter-category]');
    var year = bar.querySelector('[data-filter-year]');
    var list = document.querySelector('[data-filter-list]');

    if (!list) {
      return;
    }

    var cards = Array.prototype.slice.call(list.children);

    function applyFilter() {
      var keyword = input ? input.value.trim().toLowerCase() : '';
      var cat = category ? category.value : '';
      var selectedYear = year ? year.value : '';

      cards.forEach(function (card) {
        var title = card.getAttribute('data-title') || '';
        var cardCat = card.getAttribute('data-category') || '';
        var cardYear = card.getAttribute('data-year') || '';
        var matched = true;

        if (keyword && title.indexOf(keyword) === -1) {
          matched = false;
        }
        if (cat && cardCat !== cat) {
          matched = false;
        }
        if (selectedYear && cardYear !== selectedYear) {
          matched = false;
        }

        card.classList.toggle('is-hidden', !matched);
      });
    }

    if (input) {
      input.addEventListener('input', applyFilter);
    }
    if (category) {
      category.addEventListener('change', applyFilter);
    }
    if (year) {
      year.addEventListener('change', applyFilter);
    }

    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q && input) {
      input.value = q;
      applyFilter();
    }
  });
})();
