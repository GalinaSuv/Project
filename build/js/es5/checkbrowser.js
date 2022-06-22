'use strict';

window.checkBrowser = function () {
  function get_ya_browser() {
    var ua = navigator.userAgent;

    if (ua.search(/YaSearchBrowser/) > 0) {
      return true;
    } else {
      return false;
    }
  }

  function get_ie_browser() {
    var ie = navigator.userAgent;

    if (ie.search(/.NET4.0E; rv/) > 0) {
      return true;
    } else {
      return false;
    }
  }

  var yaBrowser = get_ya_browser();

  if (yaBrowser == true) {
    document.querySelector('.preloader').classList.add('preload--hide');
  } else {
    window.onload = function () {
      document.querySelector('.preloader').classList.add('preload--hide');
    };
  }
}();