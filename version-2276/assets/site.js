(function () {
  var menuButton = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-main-nav]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var sliders = document.querySelectorAll('[data-hero-slider]');

  sliders.forEach(function (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(slider.querySelectorAll('.hero-dot'));
    var index = 0;

    function show(nextIndex) {
      index = nextIndex;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === index);
      });
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener('click', function () {
        show(dotIndex);
      });
    });

    if (slides.length > 1) {
      setInterval(function () {
        show((index + 1) % slides.length);
      }, 5200);
    }
  });

  var filterForm = document.querySelector('[data-filter-form]');

  if (filterForm) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-filter-card]'));
    var keyword = filterForm.querySelector('[data-filter-keyword]');
    var year = filterForm.querySelector('[data-filter-year]');
    var genre = filterForm.querySelector('[data-filter-genre]');

    function applyFilter() {
      var keywordValue = (keyword && keyword.value ? keyword.value : '').trim().toLowerCase();
      var yearValue = year && year.value ? year.value : '';
      var genreValue = genre && genre.value ? genre.value : '';

      cards.forEach(function (card) {
        var text = [
          card.getAttribute('data-title') || '',
          card.getAttribute('data-region') || '',
          card.getAttribute('data-genre') || ''
        ].join(' ').toLowerCase();
        var matchKeyword = !keywordValue || text.indexOf(keywordValue) !== -1;
        var matchYear = !yearValue || (card.getAttribute('data-year') || '') === yearValue;
        var matchGenre = !genreValue || (card.getAttribute('data-genre') || '').indexOf(genreValue) !== -1;
        card.style.display = matchKeyword && matchYear && matchGenre ? '' : 'none';
      });
    }

    filterForm.addEventListener('input', applyFilter);
    filterForm.addEventListener('change', applyFilter);
  }
})();
