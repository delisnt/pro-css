const hamburgerBtn = document.querySelector('[aria-controls="primary-navigation"]')
const primaryNav = document.querySelector('.primary-nav')

hamburgerBtn.addEventListener('click', () => {
    const navOpened = hamburgerBtn.getAttribute('aria-expanded')

    if (navOpened == "false") {
        hamburgerBtn.setAttribute('aria-expanded', "true")
    } else {
        hamburgerBtn.setAttribute('aria-expanded', "false")
    }
})

const resizeObserver = new ResizeObserver((entries) => {
    document.body.classList.add("resizing");
  
    requestAnimationFrame(() => {
      document.body.classList.remove("resizing");
    });
  });
  resizeObserver.observe(document.body);
