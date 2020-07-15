

/**
 * Define Global Variables
 * 
*/
// navbar global var
const navbar = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// build the nav

const navBuilder = () => {

    let  Uli = document.createElement('ul');
    // looping over all sections
    sections.forEach(section => {

        const ID = section.getAttribute("id");
        const DataNav = section.getAttribute("data-nav");


        Uli += `<li><a class="menu__link" href="#${ID}">${DataNav}</a></li>`;

    });
    // append  list items of clicked sections to the navbar
    navbar.innerHTML = Uli;


};

navBuilder();


// Scroll to section on link click
const ScrollToSectionOnLinkClick = () => {

    const anchors = document.querySelectorAll('.navbar__menu a');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
             document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

        });
    });

};

ScrollToSectionOnLinkClick();

// adding / removing the active class  on view

const sectionView = () => {
    sections.forEach(section => {
    	//claculating the nearing section when viewing
        const elementOffset =  Math.floor(section.getBoundingClientRect().top);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

       //remove the active class
        section.classList.remove('your-active-class');
        var x=  section.querySelector('h2');
        x.style.cssText="color:white";  
        //Add the active class
        if(inviewport()){
        section.classList.add('your-active-class');
        var x=  section.querySelector('h2');
        x.style.cssText="color:green"; //To clear which section is being viewed
         
        }
        
    });
};

window.addEventListener('scroll' ,sectionView);


