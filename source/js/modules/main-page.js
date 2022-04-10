const TEXT_BUTTON_CLOSE = 'Свернуть';
const TEXT_BUTTON_OPEN = 'Подробнее';
const pageWrapper = document.querySelector('.wrapper');
const headerButton = pageWrapper.querySelector('.header__button');
const promoButton = document.querySelector('.promo__button');
const promoDesctiption = document.querySelector('.promo__description');

const footerPage = document.querySelector('.footer');
const footerLinks = footerPage.querySelector('.footer__links');
const footerContacts = footerPage.querySelector('.footer__contacts');
const buttonLinks = footerPage.querySelector('.footer__button-links');
const buttonContacts = footerPage.querySelector('.footer__button-contacts');

const modal = document.querySelector('.modal');
const modalButtonClose = modal.querySelector('.modal__button-close');
const modalInput = modal.querySelector('.modal__input');

const initModal = () => {
  modal.classList.remove('modal--init');
  pageWrapper.classList.add('page');
  modalInput.focus();
};

const closeModal = () => {
  modal.classList.add('modal--init');
  pageWrapper.classList.remove('page');
};

const initPromo = () => {
  promoDesctiption.classList.add('promo__description--close');
  promoButton.textContent = TEXT_BUTTON_OPEN;
};

const initLinksBlock = () => {
  footerLinks.classList.add('footer__links--close');
  buttonLinks.classList.remove('footer__button-links--close');
  buttonLinks.classList.add('footer__button-links--open');
};

const initContactsBlock = () => {
  footerContacts.classList.add('footer__contacts--close');
  buttonContacts.classList.remove('footer__button-contacts--close');
  buttonContacts.classList.add('footer__button-contacts--open');
};

const initPage = () => {
  initPromo();
  initLinksBlock();
  initContactsBlock();
};

const onPromoButtonHendler = () => {
  if (promoDesctiption.classList.contains('promo__description--close')) {
    promoDesctiption.classList.remove('promo__description--close');
    promoButton.textContent = TEXT_BUTTON_CLOSE;
  } else {
    promoDesctiption.classList.add('promo__description--close');
    promoButton.textContent = TEXT_BUTTON_OPEN;
  }
};

const onButtonLinksHendler = () => {
  if (buttonLinks.classList.contains('footer__button-links--open')) {
    buttonLinks.classList.remove('footer__button-links--open');
    buttonLinks.classList.add('footer__button-links--close');
    footerLinks.classList.remove('footer__links--close');
    initContactsBlock();
  } else {
    buttonLinks.classList.add('footer__button-links--open');
    buttonLinks.classList.remove('footer__button-links--close');
    footerLinks.classList.add('footer__links--close');
  }
};

const onButtonContactsHendler = () => {
  if (buttonContacts.classList.contains('footer__button-contacts--open')) {
    buttonContacts.classList.remove('footer__button-contacts--open');
    buttonContacts.classList.add('footer__button-contacts--close');
    footerContacts.classList.remove('footer__contacts--close');
    initLinksBlock();
  } else {
    buttonContacts.classList.add('footer__button-contacts--open');
    buttonContacts.classList.remove('footer__button-contacts--close');
    footerContacts.classList.add('footer__contacts--close');
  }
};

export {
  onPromoButtonHendler, initPage, onButtonLinksHendler, onButtonContactsHendler, initModal, closeModal,
  promoButton, buttonLinks, buttonContacts, headerButton, modalButtonClose, modalInput
};