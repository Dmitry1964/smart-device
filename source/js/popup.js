const pageWrapper = document.querySelector('.wrapper');
const modal = document.querySelector('.modal');
const modalButtonClose = modal.querySelector('.modal__button-close');
const userName = modal.querySelector('input[name="username"]');
const userPhone = modal.querySelector('input[name="userphone"]');
const userForm = document.querySelector('.feedback');
const userPhoneForm = userForm.querySelector('input[name="phone"]');


const initModal = () => {
  modal.classList.remove('modal--init');
  pageWrapper.classList.add('page');
  userName.focus();
};

const ARR_LENGTH = 4;
const symbols = {
  COUNTRY: '7',
  PLUS: '+',
  LEFT_BRACKET: '(',
  RIGHT_BRACKET: ')',
  SPACE: ' ',
  DASH: '-',
};

const onButtonCloseHendler = () => {
  modal.classList.add('modal--init');
  pageWrapper.classList.remove('page');
};

const onInputFormChange = () => {
  const arr = userPhoneForm.value.split('');
  const newArr = userPhoneForm.value.split('');
  inputChange(arr, newArr);
  userPhoneForm.value = arr.join('');
};

const onInputModalChange = () => {
  const arr = userPhone.value.split('');
  const newArr = userPhone.value.split('');
  inputChange(arr, newArr);
  userPhone.value = arr.join('');
};

const inputChange = (arr, newArr) => {
  if (isNaN(newArr.pop())) {
    arr.pop();
  }

  if (arr.length === 1) {
    arr.unshift(symbols.PLUS, symbols.COUNTRY, symbols.SPACE, symbols.LEFT_BRACKET);
  }

  if (arr.length === 7) {
    arr.push(symbols.RIGHT_BRACKET);
  }

  if (arr.length === 8) {
    arr.push(symbols.SPACE);
  }

  if (arr.length === 12 || arr.length === 15) {
    arr.push(symbols.DASH);
  }
  return arr;
};

const tabCircus = () => {
  userPhone.focus();
};

const onBackSpaceModalHendler = () => {
  const arr = userPhone.value.split('');
  backSpaceHendler(arr);
  userPhone.value = arr.join('');
};

const onBackSpaceFormHendler = () => {
  const arr = userPhoneForm.value.split('');
  backSpaceHendler(arr);
  userPhoneForm.value = arr.join('');
};

const backSpaceHendler = (arr) => {
  if (arr.length > ARR_LENGTH) {
    arr.pop();
  }
  return arr;
};




export {
  modalButtonClose, pageWrapper, userPhone, userPhoneForm, modal, initModal, onButtonCloseHendler, onInputModalChange,
  tabCircus, onInputFormChange, onBackSpaceModalHendler, onBackSpaceFormHendler

};

