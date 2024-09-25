import './styles/index.css';
import { deleteCard } from './components/card';
import { createCard } from './components/card';
import { initialCards } from './components/cards';
import { closePopup } from './components/modal';
import { likeCard } from './components/card';
import { openImgPopup } from './components/modal';

///////////////////////////////////
export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const popupTypeNewCard = document.querySelector('.popup_type_new-card');
export const imagePopup = document.querySelector('.popup_type_image');

// автовставка карточек на страницу
const placesList = document.querySelector('.places__list');
initialCards.forEach((el) => {
  placesList.append(createCard(el.name, el.link, deleteCard, openImgPopup, likeCard));
});


// форма редактирования профиля
const formElement = document.forms.edit_profile;
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

formElement.addEventListener('submit', handleProfileFormSubmit); 
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
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

  const newCard = createCard([titleInputValue], [linkInputValue], deleteCard, openImgPopup, likeCard);
  placesList.prepend(newCard);

  place.value = '';
  cardLink.value = '';
  popupTypeNewCard.classList.remove('popup_is-opened')
};

