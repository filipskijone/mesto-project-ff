//  нажатие на оверлей
export function closePopupOverlay(evt) {
    if (!evt.target.classList.contains("popup__content")) {
      popupTypeEdit.classList.remove("popup_is-opened"),
        popupTypeNewCard.classList.remove("popup_is-opened");
      imagePopup.classList.remove("popup_is-opened");
      this.document,removeEventListener("click", closePopupOverlay);
    }
  }
  
 
  // открыть попал картинки
  export function openImg(name, link) {
    const img = imagePopup.querySelector(".popup__image");
    const caption = imagePopup.querySelector(".popup__caption");
  
    imagePopup.classList.add("popup_is-opened");
    img.src = link;
    caption.textContent = name;
  }



  /////////////
  




    ////////////
    function openPopup(evt) {
      if (evt.target.classList.contains('.profile__edit-button')) {
          popupTypeEdit.classList.add('popup_is-opened');
          console.log('edit');
      }
      else if (evt.target.classList.contains('profile__ad-button')) {
          popupTypeNewCard.classList.add('popup_is-opened');
          console.log('add');
      }
      else if (evt.target.classList.contains('card__image')) {
          imagePopup.classList.add('popup_is-opened');
      }
  };
  