/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

/*===== CONTACT FORM ======*/
function submitForm(event) {
  event.preventDefault();  // Prevent form from submitting the traditional way
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwHexRPyZ1oBc5amxyowltD8LTBZQFnmHoTwyitnoEtlCNlq4kz2Pjp21vIx4sw9Vg3IA/exec'; // Replace with your Google Script URL
  const form = document.forms['contact-form'];
  
  // Fetch API to submit the form data to Google Apps Script
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
          alert("Thank you! Your form has been submitted successfully.");  // Show popup message
          form.reset();  // Clear the form after successful submission
      })
      .catch(error => {
          alert('Submission failed: ' + error.message);  // Error message
          console.error('Error!', error.message);
      });
}
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
