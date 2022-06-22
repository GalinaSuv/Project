const dropDown = document.querySelectorAll('.dropdown-toggle');
const dropMenu = document.querySelectorAll('.dropdown-menu');
document.onclick = function f (evt) {
  if (evt.target.classList.contains('dropdown-toggle') && !evt.target.nextElementSibling.classList.contains('dropdown-menu--open') ){
    for (let i = 0; i < dropMenu.length; i++) {
      if(dropMenu[i].classList.contains('dropdown-menu--open')){
        dropMenu[i].classList.remove('dropdown-menu--open');
      }
    }
    evt.target.nextElementSibling.classList.toggle('dropdown-menu--open');

  } else {
  for (let i = 0; i < dropMenu.length; i++) {
        if(dropMenu[i].classList.contains('dropdown-menu--open')){
          dropMenu[i].classList.remove('dropdown-menu--open')
      }
    }
  }
}
for (let i = 0; i < dropDown.length; i++){
  dropDown[i].onmouseleave = function g (evt) {
  let timerId =  setTimeout(function () {
      if(evt.target.nextElementSibling.classList.contains('dropdown-menu--open')){
        evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
      }
    }, 500)
    evt.target.nextElementSibling.onmouseleave = () => {
      let timerId1 = setTimeout(function () {
       evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
     }, 500)
     dropDown[i].onmouseenter = function () {
       clearTimeout(timerId1);

     }
     evt.target.nextElementSibling.onmouseenter = function () {
       clearTimeout(timerId1);
     }
    }

    dropDown[i].onmouseenter = function () {
      clearTimeout(timerId);

    }
    evt.target.nextElementSibling.onmouseenter = function () {
      clearTimeout(timerId);
    }
  }
}
// Мобильное меню
let mobilMenu = {
  btnNav: document.querySelector('.btn--nav'),
  menuList: document.querySelector('.main-menu'),
  menuStartHeight: () => {
    document.querySelector('.main-menu').style.visibility = 'hidden';

    document.querySelector('.main-menu').style.display = 'block';

    document.querySelector('.main-menu').style.height = 'auto';
    const height = document.querySelector('.main-menu').offsetHeight;
    document.querySelector('.main-menu').style.display = 'none';
    return height;
  },
  menuHeight: function () {
    return mobilMenu.menuList.offsetHeight;
  },
  checkMenu: function () {
    if (mobilMenu.btnNav.classList.contains('collapsed') && window.matchMedia('(max-width: 1025px)').matches){
      mobilMenu.menuList.style.display = "none";
    }
    else if (window.matchMedia('(max-width: 1025px)').matches) {
      mobilMenu.menuList.style.display = "block";
    }
    else {
      mobilMenu.menuList.style.display = "flex";
    }
  },
  showMenu: (mh) => {
    mobilMenu.btnNav.classList.remove('collapsed');
    mobilMenu.menuList.style.display = "block";
    document.querySelector('.main-menu').style.visibility = 'visible';
    mobilMenu.menuList.style.height = 0;
    let h = 0;
    let animationMenu = setInterval(function () {
      h+=30;
      mobilMenu.menuList.style.height = h + 'px';
      if (h >= mh) {
        clearTimeout(animationMenu)
      }
    },30)
  },
  collapseMenu: () => {
    mobilMenu.btnNav.classList.add('collapsed');
    let mh =  mobilMenu.menuList.offsetHeight;
    let animationMenu = setInterval(function(){
      mh -=40;
      mobilMenu.menuList.style.height = mh + 'px';
      if (mh <= 0 ){
        clearTimeout(animationMenu)
        mobilMenu.menuList.style.display = 'none';

      }
    },30)
  },
  toggleMenu: () => {
    if(mobilMenu.btnNav.classList.contains('collapsed')){
      mobilMenu.showMenu(mobilMenu.menuStartHeight());
      mobilMenu.btnNav.classList.add('btn--close');
    } else {
      mobilMenu.collapseMenu();
    mobilMenu.btnNav.classList.remove('btn--close');
    }
  },
}
mobilMenu.checkMenu();
window.addEventListener("resize", mobilMenu.checkMenu);
mobilMenu.btnNav.addEventListener('click',mobilMenu.toggleMenu)
// Выбор языка
setTimeout(function () {
  const btnLang = document.querySelector('.btn--lang');
  const langList = document.querySelector('.lang-list');
      let langContainer = {
        menuStartHeight: () => {
          document.querySelector('.lang-list').style.display = 'block';
          document.querySelector('.lang-list').style.height = 'auto';
          const height = document.querySelector('.lang-list').offsetHeight;
          document.querySelector('.lang-list').style.display = 'none';
          return height;
        },
        menuHeight: function () {
          return this.langList.offsetHeight;
        },
        checkMenu: function () {
          if (btnLang.classList.contains('collapsed')){
            langList.style.display = "none";
          }
        },
        showMenu: (mh) => {
          btnLang.classList.remove('collapsed');
          langList.style.display = "block";
          langList.style.height = 0;
          let h = 0;
          let animationMenu = setInterval(function () {
            h+=10;
            langList.style.height = h + 'px';
            if (h >= mh) {
              clearTimeout(animationMenu)
            }
          },30)
        },
        collapseMenu: () => {
          btnLang.classList.add('collapsed');
          let mh =  langList.offsetHeight;
          let animationMenu = setInterval(function(){
            mh -=10;
            langList.style.height = mh + 'px';
            if (mh <= 0 ){
              clearTimeout(animationMenu)
              document.querySelector('.lang-list').style.display = 'none';
            }
          },30)
        },
        toggleMenu: () => {
          if(btnLang.classList.contains('collapsed')){
            langContainer.showMenu(langContainer.menuStartHeight());
          } else {
            langContainer.collapseMenu()
          }
        },
      }
      langContainer.checkMenu();
      btnLang.addEventListener('click', langContainer.toggleMenu)
}, 400);
