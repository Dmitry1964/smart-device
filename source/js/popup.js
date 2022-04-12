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
  const newArr = [];
  const arr = userPhone.value.split('');
  userPhone.setCustomValidity('');
  if (arr[0] !== '+') {
    userPhone.setCustomValidity('Номер телефона должен начинаться с "+7"');
  }

  if (arr[1] !== '7') {
    userPhone.setCustomValidity('Номер телефона должен начинаться с "+7"');
  }

  if (arr.length === 2) {
    arr.push('(');
  }

  if (arr.length === 6) {
    arr.push(')');
  }

  if (arr.length > 3 && arr.length < 6) {
    newArr.push(arr[3]);
  }

  userPhone.value = arr.join('');

  userPhone.reportValidity();
};

export { modalButtonClose, pageWrapper, userPhone, initModal, onButtonCloseHendler, onInputChange };
