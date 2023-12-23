function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView();
}
function scrollToExperience() {
    document.getElementById('experience').scrollIntoView();
}
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView();
}
function scrollToContact() {
    document.getElementById('contact').scrollIntoView();
}

document.getElementById('desktop-nav-about').onclick = function() {
    scrollToAbout();
}

document.getElementById('desktop-nav-experience').onclick = function() {
    scrollToExperience();
}

document.getElementById('desktop-nav-projects').onclick = function() {
    scrollToProjects();
}

document.getElementById('desktop-nav-contact').onclick = function() {
    scrollToContact();
}

document.getElementById('hamburger-icon').onclick = function() {
    toggleMenu();
}

document.getElementById('hamburger-nav-about').onclick = function() {
    toggleMenu();
    scrollToAbout();
}

document.getElementById('hamburger-nav-experience').onclick = function() {
    toggleMenu();
    scrollToExperience();
}

document.getElementById('hamburger-nav-projects').onclick = function() {
    toggleMenu();
    scrollToProjects();
}

document.getElementById('hamburger-nav-contact').onclick = function() {
    toggleMenu();
    scrollToContact();
}
