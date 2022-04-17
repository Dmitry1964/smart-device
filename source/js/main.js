import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import {
  onPromoButtonHendler, initPage, onButtonLinksHendler, onButtonContactsHendler,
  promoButton, titleLinks, titleContacts, headerButton
} from './modules/main-page';
import {
  modalButtonClose, initModal, onButtonCloseHendler, onInputModalChange, onInputFormChange, userPhone,
  userPhoneForm, onBackSpaceModalHendler, onBackSpaceFormHendler
} from './popup';

const headerImage = document.querySelector('.header-image');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  promoButton.addEventListener('click', () => {
    onPromoButtonHendler();
  });

  titleLinks.addEventListener('click', () => {
    onButtonLinksHendler();
  });

  titleContacts.addEventListener('click', () => {
    onButtonContactsHendler();
  });

  headerButton.addEventListener('click', () => {
    initModal();
  });

  modalButtonClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    onButtonCloseHendler();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onButtonCloseHendler();
    }
  });

  headerImage.addEventListener('click', () => {
    onButtonCloseHendler();
  });

  userPhone.addEventListener('input', () => {
    onInputModalChange();
  });

  userPhoneForm.addEventListener('input', () => {
    onInputFormChange();
  });

  userPhone.addEventListener('keydown', (evt) => {
    if (evt.key === 'Backspace') {
      evt.preventDefault();
      onBackSpaceModalHendler();
    }
  });

  userPhoneForm.addEventListener('keydown', (evt) => {
    if (evt.key === 'Backspace') {
      evt.preventDefault();
      onBackSpaceFormHendler();
    }
  });



  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initPage();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
