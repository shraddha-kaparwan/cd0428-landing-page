/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('[data-nav]');
const navbar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*
    activate nav when scrolled to a section
*/
function activate(section) {
    document.addEventListener("scroll", function () {
        activateNav(section);
    });
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/*
    buildNav function creates an li and anchor elements
    finds text and id of given section element and assigns them to anchor element
    appends anchor to li and li to navbar 
*/
function buildNav(section) {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = section.dataset.nav;
    anchor.classList.add("menu__link");
    anchor.href = `#${section.id}`;
    li.appendChild(anchor);
    navbar.append(li);
}


// Add class 'active' to section when near top of viewport
/*
    when section is in viewport add class active
    when section is not in viewport remove class active
*/
function activateNav(section) {
    const rect = section.getBoundingClientRect();
    const section_nav = document.querySelector(`[href="#${section.id}"]`);
    if (rect.top <= 200 && rect.bottom >= 200) {
        section_nav.classList.add("active");
    } else {
        section_nav.classList.remove("active");
    }
    
}


// Scroll to anchor ID using scrollTO event
function scrollToSection(section_nav) {
    section_nav.addEventListener("click", (e) => {
        e.preventDefault();
        scrollBy({
            top: document
                .querySelector(e.target.getAttribute("href"))
                .getBoundingClientRect().top,
            behavior: "smooth",
          });
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
sections.forEach(buildNav)

// Set sections as active
sections.forEach(activate)

// Scroll to section on link click
document.querySelectorAll('.menu__link').forEach(scrollToSection)




