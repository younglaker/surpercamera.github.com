// Generated by CoffeeScript 1.6.3
(function() {
  var mediaObj;

  window.H5media = function(selector) {
    return new mediaObj(selector);
  };

  mediaObj = function(selector) {
    this.selector = selector;
    this.stream = null;
    this.selector.addEvent = function(ev_type, fn, bool) {
      var addEvent, th;
      th = this;
      console.log(th);
      addEvent = document.addEventListener ? th.addEventListener(ev_type, fn, bool) : th.attachEvent("on" + ev_type, fn);
      return this;
    };
    return this;
  };

  mediaObj.prototype = {
    hasGetUserMedia: function() {
      return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigatoroGetUserMedia || navigator.msieGetUserMedia || false;
    },
    openVideo: function() {
      var th;
      th = this;
      if (this.hasGetUserMedia(this.selector)) {
        navigator.getUserMedia = this.hasGetUserMedia(this.selector);
        navigator.getUserMedia({
          video: true
        }, function(mediaStream) {
          th.selector.src = (window.URL || window.webkitURL).createObjectURL(mediaStream);
          th.stream = mediaStream;
          return th;
        }, function(error) {
          return error;
        });
      } else {
        return false;
      }
      return true;
    },
    pauseVideo: function() {
      this.selector.pause();
      return this.stream.stop();
    },
    resumeVideo: function() {
      return this.openVideo();
    },
    closeVideo: function() {
      this.pauseVideo();
      return this.selector.src = "";
    },
    shotTo: function(img) {
      var canvas, ctx;
      console.dir(this.selector);
      canvas = document.querySelector("#screenshot-canvas");
      ctx = canvas.getContext('2d');
      canvas.width = this.selector.width;
      canvas.height = this.selector.height;
      ctx.drawImage(this.selector, 0, 0, this.selector.width, this.selector.height);
      return img.src = canvas.toDataURL();
    },
    speach: function() {
      var fn;
      console.log(this);
      return this.selector.addEvent("webkitspeechchange", fn = function(event) {
        var result;
        result = event.result[0].utterance;
        return console.log(result);
      });
    }
  };

}).call(this);
