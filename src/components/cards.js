import { openImgPopup } from './modal';
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// автодобавление карточек на стр
export const cardTemplate = document.querySelector("#card-template").content;
export const placesList = document.querySelector(".places__list");
initialCards.forEach((el) => {
  placesList.append(createCard(el.name, el.link, deleteCard));
});


// функция создания карточки
export function createCard(name, link, deleteCard) {
  const placesItem = cardTemplate.cloneNode(true);
  const cardLikeButton = placesItem.querySelector('.card__like-button');
  const cardImage = placesItem.querySelector('.card__image');

  placesItem.querySelector(".card__title").textContent = name;
  placesItem.querySelector(".card__image").src = link;
  placesItem.querySelector(".card__image").setAttribute("alt", "фото природы");

  const deleteButton = placesItem.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);

  cardLikeButton.addEventListener('click', likeCard);
  cardImage.addEventListener('click', () => openImgPopup(name, link));
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
  console.log(evt.target);
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active')
  }
}

