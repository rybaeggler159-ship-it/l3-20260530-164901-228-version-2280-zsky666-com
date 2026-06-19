(function () {
  var shell = document.querySelector('[data-player]');

  if (!shell) {
    return;
  }

  var video = shell.querySelector('video');
  var button = shell.querySelector('[data-video]');
  var hlsInstance = null;
  var loaded = false;

  if (!video || !button) {
    return;
  }

  function playVideo() {
    var url = button.getAttribute('data-video');

    if (!url) {
      return;
    }

    if (!loaded) {
      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: false,
          backBufferLength: 90
        });
        hlsInstance.loadSource(url);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
          video.play().catch(function () {});
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', function () {
          video.play().catch(function () {});
        }, { once: true });
      } else {
        video.src = url;
        video.play().catch(function () {});
      }

      loaded = true;
    } else {
      video.play().catch(function () {});
    }

    shell.classList.add('is-playing');
  }

  button.addEventListener('click', function (event) {
    event.preventDefault();
    playVideo();
  });

  shell.addEventListener('click', function (event) {
    if (event.target === video || event.target.closest('button')) {
      return;
    }
    playVideo();
  });

  video.addEventListener('play', function () {
    shell.classList.add('is-playing');
  });

  video.addEventListener('pause', function () {
    if (!video.ended) {
      shell.classList.remove('is-playing');
    }
  });

  window.addEventListener('beforeunload', function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
})();
