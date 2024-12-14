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

// Accordion Logic
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    // Close all answers
    document.querySelectorAll('.faq-answer').forEach(a => (a.style.display = 'none'));
    // Toggle current answer
    answer.style.display = isOpen ? 'none' : 'block';
  });
});


// Script for the FAQ dropdown

let acc = document.getElementsByClassName("accordion-btn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("btn-active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



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