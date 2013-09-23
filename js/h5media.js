// Generated by CoffeeScript 1.6.3
(function() {
  window.h5media = {
    video: {
      hasGetUserMedia: function(container) {
        var HGetUserMedia;
        return HGetUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigatoroGetUserMedia || navigator.msieGetUserMedia || false;
      },
      openCamera: function(container) {
        if (h5media.video.hasGetUserMedia(container)) {
          navigator.getUserMedia = h5media.video.hasGetUserMedia(container);
          navigator.getUserMedia({
            video: true
          }, function(mediaStream) {
            return container.src = window.URL.createObjectURL(mediaStream);
          }, function(error) {
            return error;
          });
        } else {
          return false;
        }
        return true;
      }
    }
  };

}).call(this);
