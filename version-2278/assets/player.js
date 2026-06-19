(function () {
    function ready(fn) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", fn);
        } else {
            fn();
        }
    }

    ready(function () {
        var video = document.getElementById("videoPlayer");
        var cover = document.querySelector(".player-cover");
        var button = document.querySelector("[data-play-button]");
        var source = window.__VIDEO_URL__;
        var hlsInstance = null;

        if (!video || !source) {
            return;
        }

        function attachSource() {
            if (video.getAttribute("data-ready") === "true") {
                return;
            }

            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = source;
            } else if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hlsInstance.loadSource(source);
                hlsInstance.attachMedia(video);
            } else {
                video.src = source;
            }

            video.setAttribute("data-ready", "true");
        }

        function playVideo() {
            attachSource();

            if (cover) {
                cover.classList.add("is-hidden");
            }

            video.controls = true;
            var promise = video.play();

            if (promise && typeof promise.catch === "function") {
                promise.catch(function () {});
            }
        }

        if (button) {
            button.addEventListener("click", playVideo);
        }

        if (cover) {
            cover.addEventListener("click", playVideo);
        }

        video.addEventListener("click", function () {
            if (video.paused) {
                playVideo();
            }
        });

        window.addEventListener("pagehide", function () {
            if (hlsInstance) {
                hlsInstance.destroy();
                hlsInstance = null;
            }
        });
    });
})();
