import { initialCards } from "./cards";
import { openImgPopup } from "./modal";
export const cardTemplate = document.querySelector("#card-template").content;



// функция создания карточки
export function createCard(name, link, deleteCard, openImgPopup, likeCard) {
  const placesItem = cardTemplate.cloneNode(true);
  const cardLikeButton = placesItem.querySelector(".card__like-button");
  const cardImage = placesItem.querySelector('.card__image');
  const deleteButton = placesItem.querySelector(".card__delete-button");

  placesItem.querySelector(".card__title").textContent = name;
  placesItem.querySelector(".card__image").src = link;
  placesItem.querySelector(".card__image").setAttribute("alt", "фото природы");

  
  deleteButton.addEventListener("click", deleteCard);
  cardImage.addEventListener("click", openImgPopup);
  cardLikeButton.addEventListener("click", likeCard);
  return placesItem;
}

// функция удаления карточки
export function deleteCard(evt) {
  const eventTarget = evt.target;
  const placesItem = eventTarget.closest(".places__item");
  placesItem.remove();
}

// функция для лайка карточки
export function likeCard(evt) {
    if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active")};
}

