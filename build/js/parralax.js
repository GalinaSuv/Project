if(document.querySelector('.inner-video')) {
  const video = document.querySelector('.inner-video');
  const videoDiv = document.querySelector('.inner-bg-video');
  let trH = -500;
  video.style.transform = "translateY(" + trH + "px)";
  var lastScrollTop = 0;
  const start = video.clientHeight;
  window.addEventListener("scroll", function (evt) {
  let videoTopHeight = video.getBoundingClientRect().top + window.pageYOffset;
  let videoBottom = video.getBoundingClientRect().bottom - window.pageYOffset;
  let offsetVideo = 0;
  var st = window.pageYOffset;
  if (st > lastScrollTop) {
    offsetVideo = 2
  } else {
    offsetVideo = -2
    }
  lastScrollTop = st;
  if(document.body.clientHeight - screen.height  - window.pageYOffset - video.clientHeight<0) {
   let timerId = setInterval(function () {
     trH = trH + (offsetVideo);
     if (trH < - 500) {
       trH = -500
     } else if (trH > 0) {
       trH = 0;
     }
     video.style.transform = "translateY(" + trH + "px)"
   },125)

   setTimeout(function () {
     clearInterval(timerId)},400)
  }
})};
