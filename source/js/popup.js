const pageWrapper = document.querySelector('.wrapper');
const modal = document.querySelector('.modal');
const modalButtonClose = modal.querySelector('.modal__button-close');
const userName = modal.querySelector('input[name="name"]');
const userPhone = modal.querySelector('input[name="phone"]');

const initModal = () => {
  modal.classList.remove('modal--init');
  pageWrapper.classList.add('page');
  userName.focus();
};

const onButtonCloseHendler = () => {
  modal.classList.add('modal--init');
  pageWrapper.classList.remove('page');
};

const onInputChange = () => {
  console.log(userPhone.value);
};

export { modalButtonClose, pageWrapper, userPhone, initModal, onButtonCloseHendler, onInputChange };
