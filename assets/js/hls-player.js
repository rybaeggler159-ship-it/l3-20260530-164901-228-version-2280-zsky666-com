(function () {
var Hls = window.Hls;

function setupHlsPlayer(player) {
    var video = player.querySelector("video");
    var button = player.querySelector("[data-player-start]");
    var message = player.querySelector("[data-player-message]");
    var source = player.getAttribute("data-source");
    var hls = null;
    var initialized = false;

    function showMessage(text) {
        if (!message) {
            return;
        }
        message.textContent = text;
        message.classList.add("is-visible");
    }

    function initialize() {
        if (initialized || !video || !source) {
            return Promise.resolve();
        }
        initialized = true;

        if (Hls && Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hls.loadSource(source);
            hls.attachMedia(video);
            hls.on(Hls.Events.ERROR, function (event, data) {
                if (!data || !data.fatal) {
                    return;
                }
                if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                    showMessage("网络加载异常，播放器正在重试。");
                    hls.startLoad();
                } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                    showMessage("媒体解析异常，播放器正在恢复。");
                    hls.recoverMediaError();
                } else {
                    showMessage("播放器暂时无法加载该片源。");
                    hls.destroy();
                }
            });
            return Promise.resolve();
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = source;
            return Promise.resolve();
        }

        showMessage("当前浏览器不支持 HLS 播放。");
        return Promise.resolve();
    }

    function play() {
        initialize().then(function () {
            video.play().then(function () {
                player.classList.add("is-playing");
                if (message) {
                    message.classList.remove("is-visible");
                }
            }).catch(function () {
                showMessage("请再次点击播放按钮以开始播放。");
            });
        });
    }

    if (button) {
        button.addEventListener("click", play);
    }

    if (video) {
        video.addEventListener("click", function () {
            if (video.paused) {
                play();
            } else {
                video.pause();
                player.classList.remove("is-playing");
            }
        });
        video.addEventListener("ended", function () {
            player.classList.remove("is-playing");
        });
    }
}

document.querySelectorAll("[data-hls-player]").forEach(setupHlsPlayer);
})();
