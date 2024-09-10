import './styles/index.css';
import { deleteCard, initialCards } from './components/cards';
import { createCard } from './components/cards';
import { placesList } from './components/cards';




///////////////////////////////////

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

// listener для всех попапов
document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('profile__edit-button')) {
    popupTypeEdit.classList.add('popup_is-opened');
    document.addEventListener('keydown', buttonCheck);
  }
  else if (evt.target.classList.contains('profile__add-button')){
    popupTypeNewCard.classList.add('popup_is-opened');
    document.addEventListener('keydown', buttonCheck);
  }
  else if (evt.target.classList.contains('card__image')){
    imagePopup.classList.add('popup_is-opened')
    document.addEventListener('keydown', buttonCheck)
  }
});

// ???? как создать нажатие на оверлей

//проверка на esc
function buttonCheck(evt) {
  const popupElement = document.querySelector('.popup_is-opened');
  if (evt.key === "Escape") {
    popupElement.classList.remove('popup_is-opened');
  }
}
//закрытие попапа на кнопку
document.addEventListener('click', closePopup);
function closePopup(evt) {
  if (evt.target.classList.contains('popup__close')) {
    popupTypeEdit.classList.remove('popup_is-opened'),
    popupTypeNewCard.classList.remove('popup_is-opened');
    imagePopup.classList.remove('popup_is-opened');
  }
}

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
}

// попап картинки карточки
export function openImgPopup(name, link) {
  const img = imagePopup.querySelector('.popup__image');
  const caption = imagePopup.querySelector('.popup__caption');

  imagePopup.classList.add('popup_is-opened');
  img.src = link;
  caption.textContent = name;
}