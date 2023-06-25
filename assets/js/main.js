/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// validate if const exist
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
// When user click on close button, menu will be hidden
if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav_link ,it will remove show-menu.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = ()=>{
const header = document.getElementById('header')
// when teh scroll is greater than 50 vh, add blur-header class to the header tag
this.scrollY >=50 ? header.classList.add('blur-header')
                    :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()
    // serviceID-templateID-#form-publickey
    emailjs.sendForm('service_wzzgsmm','template_l14s6kv','#contact-form','r9REnfMrPmPkGDy9w')
    .then(()=>{
        // show sent messeage
        contactMessage.textContent = 'Message sent Successfully'

        // remove messege after 5 seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)

        // clear input file
        contactForm.reset()

    }, ()=>{
        // show error message
        contactMessage.textContent = 'Message not sent (Please Contcat us later)'
    })

}

contactForm.addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{

const scrollUp = document.getElementById('scroll-up')
// when the scroll is higher than 350 vh add classlist
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
:scrollUp.classList.remove('show-scroll')

}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass  = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll',scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true  /*animation repeat */
})

sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', { origin: 'bottom' });
sr.reveal('.about__data, .skills__data', { origin: 'left' });
sr.reveal('.about__image, .skills__content', { origin: 'right' });
sr.reveal('.services__card, .projects__card', { interval: 100 });
