// ===============================
// Mobile Navigation
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu when clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ===============================
// Footer Year
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item"
).forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});