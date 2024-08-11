
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-footer`,{delay: 700})
sr.reveal(`.home-img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor-img, .footer-logo, .footer-content, .footer-copy`,{origin: 'top', interval: 100})
sr.reveal(`.donate-animate`,{origin: 'left', interval: 100})
sr.reveal(`.donate-img`,{origin: 'right'})
sr.reveal(`.title-left, .section h3, .section p`,{origin: 'top'})