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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function inView(el){
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navList = document.querySelector('#navbar__list');
const main = document.getElementsByTagName('main');
const children = main[0].children;
const docFrag = document.createDocumentFragment();
for(let i = 1 ; i < children.length ; i++){
        const newItem = document.createElement('li');
        newItem.innerHTML = '<a class =\'anchors\' href = \'#section'+i+'\'>Section '+i+'</a>';      
        docFrag.appendChild(newItem);
}
navList.appendChild(docFrag);
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',function(){
    for(let i = 1 ; i < children.length ; i++){
        if(inView(children[i])){
            children[i].classList.add('your-active-class');
        }
        else
            children[i].classList.remove('your-active-class');

}
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
