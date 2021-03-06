import { pageWrapper } from "../popup";

const TEXT_BUTTON_CLOSE = 'Свернуть';
const TEXT_BUTTON_OPEN = 'Подробнее';
const headerButton = pageWrapper.querySelector('.header__button');
const promoButton = document.querySelector('.promo__button');
const promoDesctiption = document.querySelector('.promo__description');
const promoDesctiptionPar = promoDesctiption.querySelectorAll('p');
const promoDesctiptionSpan = promoDesctiption.querySelector('span');

const footerPage = document.querySelector('.footer');
const footerLinks = footerPage.querySelectorAll('.footer__links');
const footerContacts = footerPage.querySelector('.footer__contacts');
const buttonLinks = footerPage.querySelector('.footer__button-links');
const buttonContacts = footerPage.querySelector('.footer__button-contacts');
const titleLinks = footerPage.querySelector('.footer__title-links');
const titleContacts = footerPage.querySelector('.footer__title-contacts');

console.log(promoDesctiptionPar);


const initPromo = () => {
  promoDesctiption.classList.add('promo__description--close');
  promoButton.textContent = TEXT_BUTTON_OPEN;
  for (let i = 2; i <= promoDesctiptionPar.length; i++) {
    promoDesctiptionPar[i].classList.add('visually-hidden');
  }
};

const initLinksBlock = () => {
  footerLinks.forEach((item) => {
    item.classList.add('footer__links--close');
  });
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
    for (let i = 2; i <= promoDesctiptionPar.length; i++) {
      promoDesctiptionPar[i].classList.remove('visually-hidden');
    }
  } else {
    promoDesctiption.classList.add('promo__description--close');
    promoButton.textContent = TEXT_BUTTON_OPEN;
    for (let i = 2; i <= promoDesctiptionPar.length; i++) {
      promoDesctiptionPar[i].classList.add('visually-hidden');
    }

  }
};

const onButtonLinksHendler = () => {
  if (buttonLinks.classList.contains('footer__button-links--open')) {
    buttonLinks.classList.remove('footer__button-links--open');
    buttonLinks.classList.add('footer__button-links--close');
    footerLinks.forEach((item) => {
      item.classList.remove('footer__links--close');
    });
    initContactsBlock();
  } else {
    buttonLinks.classList.add('footer__button-links--open');
    buttonLinks.classList.remove('footer__button-links--close');
    footerLinks.forEach((item) => {
      item.classList.add('footer__links--close');
    });
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

const setHiddenSpan = () => {
  if (window.innerWidth <= 767) {
    promoDesctiptionSpan.classList.add('visually-hidden');
  } else {
    promoDesctiptionSpan.classList.remove('visually-hidden');
  }

}

export {
  onPromoButtonHendler, initPage, onButtonLinksHendler, onButtonContactsHendler, setHiddenSpan,
  promoButton, titleLinks, titleContacts, headerButton
};
