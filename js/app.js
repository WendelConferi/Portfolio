const header = document.querySelector('header')

/* ----------------- STICKY BAR ------------- */

function stickyNavbar() {
  header.classList.toggle('scrolled', window.pageYOffset > 0)
}

window.addEventListener('scroll', stickyNavbar)
