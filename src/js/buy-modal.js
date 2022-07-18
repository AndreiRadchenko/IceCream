(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open1]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', logBackdropClick);
  refs.openModalBtn2.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('modal-is-hidden');
    document.body.classList.toggle('modal-open');
  }
  function logBackdropClick() {
    console.log('button click');
  }
})();
