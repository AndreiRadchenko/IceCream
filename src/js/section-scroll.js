const mobMenuLinks = document.querySelectorAll('.mob-menu__link');
const menuLinks = document.querySelectorAll('.menu__link');
const anchors = document.querySelectorAll('.anchor');

function activeMenu() {
  let len = anchors.length;
  while (--len && window.scrollY + 111 < anchors[len].offsetTop) {}
  mobMenuLinks.forEach(ltx => ltx.classList.remove('current'));
  menuLinks.forEach(ltx => ltx.classList.remove('current'));
  mobMenuLinks[len].classList.add('current');
  menuLinks[len].classList.add('current');
}
activeMenu();
window.addEventListener('scroll', activeMenu);
