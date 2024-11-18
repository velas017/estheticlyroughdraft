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
