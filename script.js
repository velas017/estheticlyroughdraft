function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// onclick nav links/scrolls -- juan 

let divs = document.querySelectorAll('div');
let navLink = document.querySelectorAll('nav div li a');

window.onscroll = () => {
    divs.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {   //for loop selects specific attributes
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav div li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}


// script for Questions/ Accordion 

// Tab Switching Logic
const tabButtons = document.querySelectorAll('.tab-btn');
const faqPanels = document.querySelectorAll('.faq-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked tab
    button.classList.add('active');

    // Show the corresponding FAQ panel
    const topic = button.dataset.topic;
    faqPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === topic);
    });
  });
});


// Script for the About Section Dropdown
let drop = document.getElementsByClassName("info-btn");
let d;

for (d = 0; d < drop.length; d++) {
  drop[d].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// 12/26 
// Script for FAQ accordion

const items = document.querySelectorAll(".faq button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//1/6 
//Script for Scroll to Top feature on bottom rightside

    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }