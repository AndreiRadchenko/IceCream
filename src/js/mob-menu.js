const refs = {
  openMobmenuBtn: document.querySelector('.mob-open-btn'),
  closeMobmenuBtn: document.querySelector('.mob-close-btn'),
  Mobmenu: document.querySelector('.mobile-menu'),
  body: document.querySelector('body'),
};

refs.openMobmenuBtn.addEventListener('click', toggleMobmenu);
refs.closeMobmenuBtn.addEventListener('click', toggleMobmenu);

function toggleMobmenu() {
  refs.Mobmenu.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
