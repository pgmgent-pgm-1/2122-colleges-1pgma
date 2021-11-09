const $btnPopup = document.querySelector('.btn-popup');
const $popup = document.querySelector('.popup');
const $popupBackground = document.querySelector('.popup__background');
// console.log($btnPopup);
// console.log($popup);
let popupIsVisible = false;
$btnPopup.addEventListener('click', (ev) => {
  popupIsVisible = !popupIsVisible;
  if (popupIsVisible) {
    $popup.classList.add('popup--show');
    $popup.classList.remove('popup--hide');
    $popupBackground.classList.add('popup__background--show');
    $popupBackground.classList.remove('popup__background--hide');
  } else {
    $popup.classList.remove('popup--show');
    $popup.classList.add('popup--hide');
    $popupBackground.classList.remove('popup__background--show');
    $popupBackground.classList.add('popup__background--hide');
  }
});