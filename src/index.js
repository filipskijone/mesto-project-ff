import './styles/index.css';
import { deleteCard, initialCards } from './components/cards';
import { createCard } from './components/cards';
import { placesList } from './components/cards';
import { openImgPopup } from './components/modal.js';



///////////////////////////////////
export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const popupTypeNewCard = document.querySelector('.popup_type_new-card');
export const imagePopup = document.querySelector('.popup_type_image');



// форма редактирования профиля
const formElement = document.forms.edit_profile;
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;

formElement.addEventListener('submit', handleFormSubmit); 
function handleFormSubmit(evt) {
  evt.preventDefault();
  document.querySelector('.profile__title').textContent = nameInput.value;
  document.querySelector('.profile__description').textContent = jobInput.value;
  nameInput.value = '';
  jobInput.value = '';
  popupTypeEdit.classList.remove('popup_is-opened')
}

// форма создания карточки
export const formNewCard = document.forms['new_place'];
export const place = formNewCard.querySelector('.popup__input_type_card-name')
export const cardLink = formNewCard.querySelector('.popup__input_type_url')

formNewCard.addEventListener('submit', addCard);
function addCard(evt) {
  evt.preventDefault();

  const titleInputValue = place.value;
  const linkInputValue = cardLink.value;

  const newCard = createCard([titleInputValue], [linkInputValue], deleteCard);
  placesList.prepend(newCard);

  place.value = '';
  cardLink.value = '';
  popupTypeNewCard.classList.remove('popup_is-opened')
};