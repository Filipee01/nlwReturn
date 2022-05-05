function onScroll() {
  if (scrollY > 0) {
    navigate.classList.add('scroll')
  } else {
    navigate.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
