import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import {
  onPromoButtonHendler, initPage, onButtonLinksHendler, onButtonContactsHendler,
  promoButton, titleLinks, titleContacts, headerButton
} from './modules/main-page';
import {
  modalButtonClose, initModal, onButtonCloseHendler, onInputModalChange, onInputFormChange, userPhone,
  userPhoneForm, onBackSpaceModalHendler, onBackSpaceFormHendler, modal, modalForm, setInvalidField, userForm
} from './popup';

const { createFocusTrap } = require('focus-trap');

const focusTrap = createFocusTrap(modal);


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


  headerButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    initModal();
  });
  headerButton.addEventListener('click', focusTrap.activate);

  modalButtonClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    onButtonCloseHendler();
  });
  modalButtonClose.addEventListener('click', focusTrap.deactivate);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onButtonCloseHendler();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      focusTrap.deactivate();
    }
  });

  modal.addEventListener('click', (evt) => {
    if (evt.target === document.querySelector('.modal__wrapper')) {
      onButtonCloseHendler();
      focusTrap.deactivate();
    }
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

  modalForm.addEventListener('submit', (evt) => {
    if (userPhone.value.split('').length < 18) {
      evt.preventDefault();
      setInvalidField(userPhone);
    }
  });

  userForm.addEventListener('submit', (evt) => {
    if (userPhoneForm.value.split('').length < 18) {
      evt.preventDefault();
      setInvalidField(userPhoneForm);
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
