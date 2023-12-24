function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector("#hamburger-icon");
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
  
  document.getElementById('footer-nav-about').onclick = function() {
    scrollToAbout();
  }
  
  document.getElementById('footer-nav-experience').onclick = function() {
    scrollToExperience();
  }
  
  document.getElementById('footer-nav-projects').onclick = function() {
    scrollToProjects();
  }
  
  document.getElementById('footer-nav-contact').onclick = function() {
    scrollToContact();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var profileContactButton = document.getElementById('profile-contact-button');
    profileContactButton.addEventListener('click', function() {
      scrollToContact();
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var linkedInButton = document.getElementById('linkedin-button');
    linkedInButton.addEventListener('click', function() {
      window.open('https://linkedin.com/in/zacharyartman');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var githubButton = document.getElementById('github-button');
    githubButton.addEventListener('click', function() {
      window.open('https://github.com/zacharyartman');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var viewResumeButton = document.getElementById('view-resume-button');
    viewResumeButton.addEventListener('click', function() {
      window.open('./assets/Zachary_Artman_Resume.pdf');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var project1GithubButton = document.getElementById('project1-github-button');
    project1GithubButton.addEventListener('click', function() {
      window.open('https://github.com/zacharyartman/FlightBooking');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var project2GithubButton = document.getElementById('project2-github-button');
    project2GithubButton.addEventListener('click', function() {
      window.open('https://github.com/zacharyartman/fair-share-dining');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var project2LiveDemoButton = document.getElementById('project2-live-demo-button');
    project2LiveDemoButton.addEventListener('click', function() {
      window.open('https://zacharyartman.com/fairshare');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var project3GithubButton = document.getElementById('project3-github-button');
    project3GithubButton.addEventListener('click', function() {
      window.open('https://github.com/zacharyartman/DetailingWebsite');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var project3LiveDemoButton = document.getElementById('project3-live-demo-button');
    project3LiveDemoButton.addEventListener('click', function() {
      window.open('https://zacharyartman.com/detailing');
    });
  });