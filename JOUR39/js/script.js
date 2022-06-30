const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (this.window.scrollY >= 50) {
        navbar.classList.add('scrolled-state')
    } else {
        navbar.classList.remove('scrolled-state')
    }
})