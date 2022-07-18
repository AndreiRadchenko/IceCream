(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-locations-modal-open]'),
    closeModalBtn: document.querySelector('[data-locations-modal-close]'),
    modal: document.querySelector('[data-locations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise-modal-open]'),
    closeModalBtn: document.querySelector('[data-franchise-modal-close]'),
    modal: document.querySelector('[data-franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
