import { popupTypeEdit, popupTypeNewCard, imagePopup } from "..";



// listener для всех попапов
document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("profile__edit-button")) {
    popupTypeEdit.classList.add("popup_is-opened");
    document.addEventListener("keydown", buttonCheck);
    this.documentElement.addEventListener("click", closePopupOverlay);
  } else if (evt.target.classList.contains("profile__add-button")) {
    popupTypeNewCard.classList.add("popup_is-opened");
    document.addEventListener("keydown", buttonCheck);
    this.documentElement.addEventListener("click", closePopupOverlay);
  } else if (evt.target.classList.contains("card__image")) {
    imagePopup.classList.add("popup_is-opened");
    document.addEventListener("keydown", buttonCheck);
    this.documentElement.addEventListener("click", closePopupOverlay);
  }
});

//  нажатие на оверлей
export function closePopupOverlay(evt) {
  if (!evt.target.classList.contains("popup__content")) {
    popupTypeEdit.classList.remove("popup_is-opened"),
      popupTypeNewCard.classList.remove("popup_is-opened");
    imagePopup.classList.remove("popup_is-opened");
  }
}

//проверка на esc
export function buttonCheck(evt) {
  const popupElement = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") {
    popupElement.classList.remove("popup_is-opened");
  }
}

//закрытие попапа на кнопку
document.addEventListener("click", closePopup);
export function closePopup(evt) {
  if (evt.target.classList.contains("popup__close")) {
    popupTypeEdit.classList.remove("popup_is-opened"),
      popupTypeNewCard.classList.remove("popup_is-opened");
    imagePopup.classList.remove("popup_is-opened");
  }
}

// открыть попал картинки
export function openImgPopup(name, link) {
  const img = imagePopup.querySelector(".popup__image");
  const caption = imagePopup.querySelector(".popup__caption");

  imagePopup.classList.add("popup_is-opened");
  img.src = link;
  caption.textContent = name;
}
