/* =========================
SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


/* =========================
NAVBAR SCROLL EFFECT
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.getElementById("nav-menu");

    menu.classList.toggle("active");

}


/* =========================
CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const menu = document.getElementById("nav-menu");

        menu.classList.remove("active");

    });

});


/* =========================
VISITOR COUNTER
========================= */

const visitorCount = document.getElementById("visitor-count");

/*
    Unique ID for your website.
    This makes the counter separate from other websites.
*/

const counterKey = "ammar-usrah-budi-portfolio";


async function updateVisitorCount() {

    try {

        const response = await fetch(
            `https://api.counterapi.dev/v1/${counterKey}/visits/up`
        );

        if (!response.ok) {
            throw new Error("Counter request failed");
        }

        const data = await response.json();

        visitorCount.textContent = Number(data.count).toLocaleString();

    } catch (error) {

        console.error("Visitor counter error:", error);

        visitorCount.textContent = "—";

    }

}


updateVisitorCount();