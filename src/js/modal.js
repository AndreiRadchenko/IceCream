(() => {
  const refs = {
    openModalBtn: document.querySelector('[locations-modal-open]'),
    closeModalBtn: document.querySelector('[locations-modal-close]'),
    modal: document.querySelector('[locations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[franchise-modal-open]'),
    closeModalBtn: document.querySelector('[franchise-modal-close]'),
    modal: document.querySelector('[franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
