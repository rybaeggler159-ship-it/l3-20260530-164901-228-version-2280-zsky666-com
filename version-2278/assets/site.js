(function () {
    function ready(fn) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", fn);
        } else {
            fn();
        }
    }

    ready(function () {
        var toggle = document.querySelector("[data-menu-toggle]");
        var panel = document.querySelector("[data-mobile-panel]");

        if (toggle && panel) {
            toggle.addEventListener("click", function () {
                panel.classList.toggle("is-open");
            });
        }

        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
        var prev = document.querySelector("[data-hero-prev]");
        var next = document.querySelector("[data-hero-next]");
        var activeIndex = 0;
        var heroTimer = null;

        function showSlide(index) {
            if (!slides.length) {
                return;
            }

            activeIndex = (index + slides.length) % slides.length;

            slides.forEach(function (slide, current) {
                slide.classList.toggle("is-active", current === activeIndex);
            });

            dots.forEach(function (dot, current) {
                dot.classList.toggle("is-active", current === activeIndex);
            });
        }

        function startHeroTimer() {
            if (!slides.length) {
                return;
            }

            clearInterval(heroTimer);
            heroTimer = setInterval(function () {
                showSlide(activeIndex + 1);
            }, 5200);
        }

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                showSlide(Number(dot.getAttribute("data-hero-dot")) || 0);
                startHeroTimer();
            });
        });

        if (prev) {
            prev.addEventListener("click", function () {
                showSlide(activeIndex - 1);
                startHeroTimer();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                showSlide(activeIndex + 1);
                startHeroTimer();
            });
        }

        startHeroTimer();

        var filterInput = document.querySelector("[data-card-filter]");
        var cardList = document.querySelector("[data-card-list]") || document;

        if (filterInput) {
            filterInput.addEventListener("input", function () {
                var keyword = filterInput.value.trim().toLowerCase();
                var cards = Array.prototype.slice.call(cardList.querySelectorAll("[data-search]"));

                cards.forEach(function (card) {
                    var text = card.getAttribute("data-search") || "";
                    card.style.display = text.indexOf(keyword) === -1 ? "none" : "";
                });
            });
        }

        if (window.__INIT_SEARCH_PAGE__ && window.SEARCH_MOVIES) {
            initSearchPage();
        }
    });

    function initSearchPage() {
        var params = new URLSearchParams(window.location.search);
        var input = document.getElementById("siteSearchInput");
        var results = document.getElementById("searchResults");
        var initial = params.get("q") || "";

        if (!input || !results) {
            return;
        }

        input.value = initial;

        function card(movie) {
            return [
                '<article class="movie-card">',
                '    <a class="poster-link" href="./' + escapeHtml(movie.url) + '" aria-label="' + escapeHtml(movie.title) + '">',
                '        <img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
                '        <span class="play-chip">播放</span>',
                '    </a>',
                '    <div class="movie-card-body">',
                '        <div class="movie-card-meta">',
                '            <span>' + escapeHtml(movie.year) + '</span>',
                '            <span>' + escapeHtml(movie.region) + '</span>',
                '            <span>' + escapeHtml(movie.type) + '</span>',
                '        </div>',
                '        <h3><a href="./' + escapeHtml(movie.url) + '">' + escapeHtml(movie.title) + '</a></h3>',
                '        <p>' + escapeHtml(movie.oneLine) + '</p>',
                '        <div class="tag-row"><span class="tag">' + escapeHtml(movie.genre) + '</span></div>',
                '    </div>',
                '</article>'
            ].join("\n");
        }

        function render() {
            var keyword = input.value.trim().toLowerCase();
            var matches = window.SEARCH_MOVIES.filter(function (movie) {
                return !keyword || movie.search.indexOf(keyword) !== -1;
            }).slice(0, 120);

            if (!matches.length) {
                results.innerHTML = '<div class="empty-state">没有找到匹配的影片。</div>';
                return;
            }

            results.innerHTML = matches.map(card).join("\n");
        }

        input.addEventListener("input", render);
        render();
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
})();
