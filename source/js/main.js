import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import {
  onPromoButtonHendler, initPage, onButtonLinksHendler, onButtonContactsHendler,
  promoButton, titleLinks, titleContacts, headerButton, setHiddenSpan,
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
    setPosition();
  });
  headerButton.addEventListener('click', focusTrap.activate);

  modalButtonClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    onButtonCloseHendler();
    focusTrap.deactivate();
  });
  // modalButtonClose.addEventListener('click', focusTrap.deactivate);

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

  // ?????? ?????????????? ???????????? ???????? ?? ?????????????????????? 'DOMContentLoaded', ???? ???? ?????? ?? 'load'
  // ?? load ?????????????? ???????????????? ??????????????, ???? ?????????????????????? ?? ???????????? ?????????????? ????????????
  window.addEventListener('load', () => {
    initModals();
    initPage();
  });
});

const setPosition = () => {
  if (window.innerHeight < 760) {
    modal.style.position = 'absolute';
  }

  if (window.innerHeight >= 760) {
    modal.style.position = 'fixed';
  }
};

window.addEventListener('resize', () => {
  setPosition();
  setHiddenSpan();
});

// ---------------------------------

// ????????? ?????????????????????? ???????????????????? ?????????????? eslint, stylelint, editorconfig ?? ???????????????? ????????.

// ???????????????????????? js ???? ???? ????????????, ?? ???? ???????? ???????????????? (data-validate)

// ???????????? ?????????????????????????? .block--active ???????????????????? ?????????????????????? ????????????
// .is-active || .is-open || .is-invalid ?? ???????????? (???????????????????? ?????????????? ?? ?????? ??????????)
// .select.select--opened ??? ---> [data-select].is-open ???

// ?????????????? ?????? ?? ???????? ????????????????
// url ???? ???????????? ?????????? ??????????, ?????????????????? ?????????????????????????? ????????????????, url ?? json ?? ??.??.

// ?????? ?????????????????????? JS ?????????????????????????? matchMedia ?? addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// ?????????????????????? .closest(el)
