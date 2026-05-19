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
