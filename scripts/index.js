const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector('.places__list');

initialCards.forEach((el) => {
 placesList.append(createCard(el.name, el.link, deleteCard));
});

function createCard(name, link, deleteCard) {
  const placesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  placesItem.querySelector('.card__title').textContent = name;
  placesItem.querySelector('.card__image').src = link;
  const deleteButton = placesItem.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  return placesItem;
}

 function deleteCard (evt) {
    const eventTarget = evt.target;
    const placesItem = eventTarget.closest('.places__item');
    placesItem.remove();
 }