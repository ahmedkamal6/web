
 /* Start Helper Functions
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

