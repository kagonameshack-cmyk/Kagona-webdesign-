const toggle =
document.querySelector('.menu-toggle');

const menu =
document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {

    toggle.classList.toggle('active');

    menu.classList.toggle('active');

});

/* CLOSE MENU ON LINK CLICK */

document.querySelectorAll(
'.mobile-menu a'
).forEach(link => {

    link.addEventListener('click', () => {

        toggle.classList.remove('active');

        menu.classList.remove('active');

    });

});


/* REVEAL ANIMATIONS */

const reveals = document.querySelectorAll(

'.projects-title, .project-card, .journal-title, .journal-card, .philosophy-left, .philosophy-item, .services-title, .service-card, .process-title, .process-card, .contact-left, .contact-form'

);

window.addEventListener(
'scroll',
revealSections
);

function revealSections(){

    const trigger =
    window.innerHeight * 0.88;

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add('active');

        }

    });

}

/* INITIAL CHECK */

revealSections();
