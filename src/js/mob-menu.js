const refs = {
  openMobmenuBtn: document.querySelector('.mob-open-btn'),
  closeMobmenuBtn: document.querySelector('.mob-close-btn'),
  Mobmenu: document.querySelector('.mobile-menu'),
  body: document.querySelector('body'),
  list: document.querySelector('.mob-menu__list'),
};

refs.openMobmenuBtn.addEventListener('click', toggleMobmenu);
refs.closeMobmenuBtn.addEventListener('click', toggleMobmenu);
refs.list.addEventListener('click', toggleMobmenu);

function toggleMobmenu() {
  refs.Mobmenu.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
