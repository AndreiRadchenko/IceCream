(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-modal-close]'),
    modal: document.querySelector('[data-about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
$(document).on('click', '#close_vid', function () {
  jQuery('iframe').each(function () {
    jQuery(this)[0].contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*'
    );
  });
});
