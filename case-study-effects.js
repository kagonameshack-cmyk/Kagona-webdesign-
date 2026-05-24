// REVEAL ANIMATION

const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

    const trigger =
    window.innerHeight * 0.88;

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealSections
);

revealSections();


// PARALLAX EFFECT

const parallaxImages =
document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    parallaxImages.forEach(img => {

        const speed = 0.08;

        img.style.transform =
        `translateY(${scrollY * speed}px)`;

    });

});
