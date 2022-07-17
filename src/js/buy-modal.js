(() => {
  const refs = {
    openModalBtn1: document.querySelector('[buy-modal-open1]'),
    openModalBtn2: document.querySelector('[buy-modal-open2]'),
    closeModalBtn: document.querySelector('[buy-modal-close]'),
    modal: document.querySelector('[buy-modal]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', logBackdropClick);
  refs.openModalBtn2.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('modal-is-hidden');
  }
  function logBackdropClick() {
    console.log('button click');
  }
})();
