import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import {
  onPromoButtonHendler, initPage, onButtonLinksHendler, onButtonContactsHendler,
  promoButton, buttonLinks, buttonContacts, headerButton,
} from './modules/main-page';
import { modalButtonClose, initModal, onButtonCloseHendler, onInputChange, userPhone } from './popup';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  promoButton.addEventListener('click', () => {
    onPromoButtonHendler();
  });
  buttonLinks.addEventListener('click', () => {
    onButtonLinksHendler();
  });
  buttonContacts.addEventListener('click', () => {
    onButtonContactsHendler();
  });

  headerButton.addEventListener('click', () => {
    initModal();
  });

  modalButtonClose.addEventListener('click', () => {
    onButtonCloseHendler();
  });

  userPhone.addEventListener('input', () => {
    onInputChange();
  })



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
