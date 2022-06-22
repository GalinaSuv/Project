"use strict";

var dropDown = document.querySelectorAll('.dropdown-toggle');
var dropMenu = document.querySelectorAll('.dropdown-menu');

document.onclick = function f(evt) {
  if (evt.target.classList.contains('dropdown-toggle') && !evt.target.nextElementSibling.classList.contains('dropdown-menu--open')) {
    for (var i = 0; i < dropMenu.length; i++) {
      if (dropMenu[i].classList.contains('dropdown-menu--open')) {
        dropMenu[i].classList.remove('dropdown-menu--open');
      }
    }

    evt.target.nextElementSibling.classList.toggle('dropdown-menu--open');
  } else {
    for (var _i = 0; _i < dropMenu.length; _i++) {
      if (dropMenu[_i].classList.contains('dropdown-menu--open')) {
        dropMenu[_i].classList.remove('dropdown-menu--open');
      }
    }
  }
};

var _loop = function _loop(i) {
  dropDown[i].onmouseleave = function g(evt) {
    var timerId = setTimeout(function () {
      if (evt.target.nextElementSibling.classList.contains('dropdown-menu--open')) {
        evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
      }
    }, 500);

    evt.target.nextElementSibling.onmouseleave = function () {
      var timerId1 = setTimeout(function () {
        evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
      }, 500);

      dropDown[i].onmouseenter = function () {
        clearTimeout(timerId1);
      };

      evt.target.nextElementSibling.onmouseenter = function () {
        clearTimeout(timerId1);
      };
    };

    dropDown[i].onmouseenter = function () {
      clearTimeout(timerId);
    };

    evt.target.nextElementSibling.onmouseenter = function () {
      clearTimeout(timerId);
    };
  };
};

for (var i = 0; i < dropDown.length; i++) {
  _loop(i);
} // Мобильное меню


var mobilMenu = {
  btnNav: document.querySelector('.btn--nav'),
  menuList: document.querySelector('.main-menu'),
  menuStartHeight: function menuStartHeight() {
    document.querySelector('.main-menu').style.visibility = 'hidden';
    document.querySelector('.main-menu').style.display = 'block';
    document.querySelector('.main-menu').style.height = 'auto';
    var height = document.querySelector('.main-menu').offsetHeight;
    document.querySelector('.main-menu').style.display = 'none';
    return height;
  },
  menuHeight: function menuHeight() {
    return mobilMenu.menuList.offsetHeight;
  },
  checkMenu: function checkMenu() {
    if (mobilMenu.btnNav.classList.contains('collapsed') && window.matchMedia('(max-width: 1025px)').matches) {
      mobilMenu.menuList.style.display = "none";
    } else if (window.matchMedia('(max-width: 1025px)').matches) {
      mobilMenu.menuList.style.display = "block";
    } else {
      mobilMenu.menuList.style.display = "flex";
    }
  },
  showMenu: function showMenu(mh) {
    mobilMenu.btnNav.classList.remove('collapsed');
    mobilMenu.menuList.style.display = "block";
    document.querySelector('.main-menu').style.visibility = 'visible';
    mobilMenu.menuList.style.height = 0;
    var h = 0;
    var animationMenu = setInterval(function () {
      h += 30;
      mobilMenu.menuList.style.height = h + 'px';

      if (h >= mh) {
        clearTimeout(animationMenu);
      }
    }, 30);
  },
  collapseMenu: function collapseMenu() {
    mobilMenu.btnNav.classList.add('collapsed');
    var mh = mobilMenu.menuList.offsetHeight;
    var animationMenu = setInterval(function () {
      mh -= 40;
      mobilMenu.menuList.style.height = mh + 'px';

      if (mh <= 0) {
        clearTimeout(animationMenu);
        mobilMenu.menuList.style.display = 'none';
      }
    }, 30);
  },
  toggleMenu: function toggleMenu() {
    if (mobilMenu.btnNav.classList.contains('collapsed')) {
      mobilMenu.showMenu(mobilMenu.menuStartHeight());
      mobilMenu.btnNav.classList.add('btn--close');
    } else {
      mobilMenu.collapseMenu();
      mobilMenu.btnNav.classList.remove('btn--close');
    }
  }
};
mobilMenu.checkMenu();
window.addEventListener("resize", mobilMenu.checkMenu);
mobilMenu.btnNav.addEventListener('click', mobilMenu.toggleMenu); // Выбор языка

setTimeout(function () {
  var btnLang = document.querySelector('.btn--lang');
  var langList = document.querySelector('.lang-list');
  var langContainer = {
    menuStartHeight: function menuStartHeight() {
      document.querySelector('.lang-list').style.display = 'block';
      document.querySelector('.lang-list').style.height = 'auto';
      var height = document.querySelector('.lang-list').offsetHeight;
      document.querySelector('.lang-list').style.display = 'none';
      return height;
    },
    menuHeight: function menuHeight() {
      return this.langList.offsetHeight;
    },
    checkMenu: function checkMenu() {
      if (btnLang.classList.contains('collapsed')) {
        langList.style.display = "none";
      }
    },
    showMenu: function showMenu(mh) {
      btnLang.classList.remove('collapsed');
      langList.style.display = "block";
      langList.style.height = 0;
      var h = 0;
      var animationMenu = setInterval(function () {
        h += 10;
        langList.style.height = h + 'px';

        if (h >= mh) {
          clearTimeout(animationMenu);
        }
      }, 30);
    },
    collapseMenu: function collapseMenu() {
      btnLang.classList.add('collapsed');
      var mh = langList.offsetHeight;
      var animationMenu = setInterval(function () {
        mh -= 10;
        langList.style.height = mh + 'px';

        if (mh <= 0) {
          clearTimeout(animationMenu);
          document.querySelector('.lang-list').style.display = 'none';
        }
      }, 30);
    },
    toggleMenu: function toggleMenu() {
      if (btnLang.classList.contains('collapsed')) {
        langContainer.showMenu(langContainer.menuStartHeight());
      } else {
        langContainer.collapseMenu();
      }
    }
  };
  langContainer.checkMenu();
  btnLang.addEventListener('click', langContainer.toggleMenu);
}, 400);