(function () {
    var base = document.body.getAttribute("data-base") || "./";

    function joinUrl(prefix, url) {
        return prefix + url.replace(/^\.\//, "");
    }

    function normalize(value) {
        return (value || "").toString().toLowerCase().trim();
    }

    function setupImageFallbacks() {
        document.querySelectorAll("img[data-cover]").forEach(function (img) {
            img.addEventListener("error", function () {
                img.style.display = "none";
                var shell = img.closest(".poster-shell, .hero-slide, .video-player");
                if (shell) {
                    shell.classList.add("poster-fallback");
                }
            });
        });
    }

    function setupHero() {
        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
        var prev = document.querySelector("[data-hero-prev]");
        var next = document.querySelector("[data-hero-next]");
        var index = 0;
        var timer = null;

        if (!slides.length) {
            return;
        }

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle("is-active", i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle("is-active", i === index);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5000);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                show(i);
                start();
            });
        });

        if (prev) {
            prev.addEventListener("click", function () {
                show(index - 1);
                start();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                show(index + 1);
                start();
            });
        }

        var stage = document.querySelector(".hero-stage");
        if (stage) {
            stage.addEventListener("mouseenter", stop);
            stage.addEventListener("mouseleave", start);
        }

        show(0);
        start();
    }

    function setupMobileMenu() {
        var button = document.querySelector("[data-mobile-menu]");
        var nav = document.querySelector("[data-mobile-nav]");
        if (!button || !nav) {
            return;
        }
        button.addEventListener("click", function () {
            nav.classList.toggle("is-open");
        });
    }

    function setupGlobalSearch() {
        var inputs = Array.prototype.slice.call(document.querySelectorAll("[data-global-search]"));
        var data = window.__MOVIE_SEARCH_INDEX__ || [];
        if (!inputs.length || !data.length) {
            return;
        }

        inputs.forEach(function (input) {
            var panel = input.parentElement.querySelector("[data-search-panel]");
            if (!panel) {
                return;
            }

            function render() {
                var query = normalize(input.value);
                if (!query) {
                    panel.classList.remove("is-open");
                    panel.innerHTML = "";
                    return;
                }
                var results = data.filter(function (item) {
                    var haystack = normalize([
                        item.title,
                        item.category,
                        item.year,
                        item.type,
                        (item.tags || []).join(" "),
                        item.oneLine
                    ].join(" "));
                    return haystack.indexOf(query) !== -1;
                }).slice(0, 10);

                if (!results.length) {
                    panel.innerHTML = '<div class="search-result"><strong>未找到匹配影片</strong><span>换一个关键词试试</span></div>';
                    panel.classList.add("is-open");
                    return;
                }

                panel.innerHTML = results.map(function (item) {
                    return '<a class="search-result" href="' + joinUrl(base, item.url) + '">' +
                        '<strong>' + escapeHtml(item.title) + '</strong>' +
                        '<span>' + escapeHtml(item.category + " · " + item.year + " · " + item.type) + '</span>' +
                        '</a>';
                }).join("");
                panel.classList.add("is-open");
            }

            input.addEventListener("input", render);
            input.addEventListener("focus", render);
            document.addEventListener("click", function (event) {
                if (!input.parentElement.contains(event.target)) {
                    panel.classList.remove("is-open");
                }
            });
        });
    }

    function escapeHtml(value) {
        return (value || "").replace(/[&<>\"]/g, function (ch) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "\"": "&quot;"
            }[ch];
        });
    }

    function setupPageFilter() {
        var scope = document.querySelector("[data-filter-scope]");
        var list = document.querySelector("[data-card-list]");
        if (!scope || !list) {
            return;
        }

        var textInput = scope.querySelector("[data-page-filter]");
        var yearSelect = scope.querySelector("[data-year-filter]");
        var typeSelect = scope.querySelector("[data-type-filter]");
        var count = scope.querySelector("[data-filter-count]");
        var cards = Array.prototype.slice.call(list.querySelectorAll(".movie-card"));

        function apply() {
            var query = normalize(textInput ? textInput.value : "");
            var year = normalize(yearSelect ? yearSelect.value : "");
            var type = normalize(typeSelect ? typeSelect.value : "");
            var visible = 0;

            cards.forEach(function (card) {
                var haystack = normalize([
                    card.getAttribute("data-title"),
                    card.getAttribute("data-tags"),
                    card.getAttribute("data-year"),
                    card.getAttribute("data-type")
                ].join(" "));
                var ok = true;
                if (query && haystack.indexOf(query) === -1) {
                    ok = false;
                }
                if (year && normalize(card.getAttribute("data-year")) !== year) {
                    ok = false;
                }
                if (type && normalize(card.getAttribute("data-type")) !== type) {
                    ok = false;
                }
                card.classList.toggle("is-hidden", !ok);
                if (ok) {
                    visible += 1;
                }
            });

            if (count) {
                count.textContent = "显示 " + visible + " 部";
            }
        }

        [textInput, yearSelect, typeSelect].forEach(function (control) {
            if (control) {
                control.addEventListener("input", apply);
                control.addEventListener("change", apply);
            }
        });
    }

    setupImageFallbacks();
    setupHero();
    setupMobileMenu();
    setupGlobalSearch();
    setupPageFilter();
})();
