import { popupTypeEdit, popupTypeNewCard, imagePopup } from "../index.js";


const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');


document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('profile__edit-button')) {
    const evt = popupTypeEdit;
    openPopup(evt);
    } else if (evt.target.classList.contains('profile__add-button')) {
        const evt = popupTypeNewCard;
        openPopup(evt);
    } else if (evt.target.classList.contains('card__image')) {
        const evt = imagePopup;
        openPopup(evt);
        openImgPopup(evt);
    }
    }
    );


function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    popup.addEventListener("click", (evt) => {
        const target = evt.target;
        if (target.classList.contains('popup__close')) {
            closePopup(popup);
        } else if (!target.classList.contains('popup__content')) {
            closePopup(popup);
        }
        document.addEventListener("keydown", closeByEsc);
    })
}
  //закрытие попапа на кнопку
export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener("keydown", closeByEsc);
  }

///зыкрытие попапа на esc
function closeByEsc(evt) {
    const popup = document.querySelector('.popup_is-opened')
        if (evt.key === "Escape") {
            closePopup(popup);
        }
        document.removeEventListener("keydown", closeByEsc);
    }

///откртие попапа картинки
export const openImgPopup = (cardData) => {
    const img = imagePopup.querySelector(".popup__image");
    const caption = imagePopup.querySelector(".popup__caption");
  
    imagePopup.classList.add("popup_is-opened");
    img.src = cardData.link;
    caption.textContent = cardData.name;

}
