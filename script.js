const menuToggle =
document.querySelector(".menu-toggle");

const mobileMenu =
document.querySelector(".mobile-menu");

const mobileLinks =
document.querySelectorAll(".mobile-menu a");

/* TOGGLE */

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

/* CLOSE AFTER CLICK */

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


const reveals = document.querySelectorAll(
'.projects-title, .project-card, .philosophy-left, .philosophy-item, .services-title, .service-card, .process-title, .process-card, .contact-left, .contact-form'
);

window.addEventListener('scroll', revealSections);

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

revealSections();
