/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Zachary Artman"],
  loop : false,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000,
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1500,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 1500,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 1500,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section'); // Ensure your sections have the <section> tag
  const scrollY = window.pageYOffset; // Get the current scroll position

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50; // Adjust offset if needed
    const sectionId = current.getAttribute('id');

    const navElement = document.getElementById('on' + sectionId); // Match ID with onHome, onAbout, etc.

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navElement) navElement.classList.add('active-link');
    } else {
      if (navElement) navElement.classList.remove('active-link');
    }
  });
});}

document.getElementById('onabout').onclick = function() {
  document.getElementById('about').scrollIntoView();
};
document.getElementById('onprojects').onclick = function() {
  document.getElementById('projects').scrollIntoView();
};

document.getElementById('onhome').onclick = function() {
  document.getElementById('home').scrollIntoView();
};

document.getElementById('onAboutFooter').onclick = function() {
  document.getElementById('about').scrollIntoView();
};
document.getElementById('onProjectsFooter').onclick = function() {
  document.getElementById('projects').scrollIntoView();
};

document.getElementById('onHomeFooter').onclick = function() {
  document.getElementById('home').scrollIntoView();
};


document.getElementById('onscrolldown').onclick = function() {
  document.getElementById('about').scrollIntoView();
};


window.addEventListener('scroll', scrollActive)