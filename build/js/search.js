const btnSearch = document.querySelector(`.search-btn`);
const formSearch = document.querySelector(`.search-block`);
const mainMenu = document.querySelector(`.main-menu`);
btnSearch.addEventListener(`click`, searchShow)
function searchShow(evt) {
  formSearch.classList.add('animate-search');
  if (window.matchMedia('(min-width: 1026px)').matches) {
    mainMenu.classList.add('main-menu--hidden');
  } else {
  if (document.querySelector(`.page-title`)) {
    document.querySelector(`.page-title`).style.marginBottom = `80px`
  }
  }
  formSearch.classList.remove('animate-search-remove');
}
function removeSearch() {
  if (document.querySelector(`.page-title`)) {
    document.querySelector(`.page-title`).style.marginBottom = `0`
  }
  formSearch.classList.remove('animate-search');
  if(window.matchMedia('(min-width: 1026px)').matches){

  mainMenu.classList.remove('main-menu--hidden');
}
  formSearch.classList.add('animate-search-remove');
}
const isEscPressed = (key) => {
  return key === `Escape` || key === `Esc`;
};
document.addEventListener(`keydown`, onEscKeydown);
function onEscKeydown (evt) {
  if (isEscPressed(evt.key) && formSearch.classList.contains(`animate-search`)){
    removeSearch()
  }
}
