"use strict";

if (document.querySelector('.inner-video')) {
  var video = document.querySelector('.inner-video');
  var videoDiv = document.querySelector('.inner-bg-video');
  var trH = -500;
  video.style.transform = "translateY(" + trH + "px)";
  var lastScrollTop = 0;
  var start = video.clientHeight;
  window.addEventListener("scroll", function (evt) {
    var videoTopHeight = video.getBoundingClientRect().top + window.pageYOffset;
    var videoBottom = video.getBoundingClientRect().bottom - window.pageYOffset;
    var offsetVideo = 0;
    var st = window.pageYOffset;

    if (st > lastScrollTop) {
      offsetVideo = 2;
    } else {
      offsetVideo = -2;
    }

    lastScrollTop = st;

    if (document.body.clientHeight - screen.height - window.pageYOffset - video.clientHeight < 0) {
      var timerId = setInterval(function () {
        trH = trH + offsetVideo;

        if (trH < -500) {
          trH = -500;
        } else if (trH > 0) {
          trH = 0;
        }

        video.style.transform = "translateY(" + trH + "px)";
      }, 125);
      setTimeout(function () {
        clearInterval(timerId);
      }, 400);
    }
  });
}

;