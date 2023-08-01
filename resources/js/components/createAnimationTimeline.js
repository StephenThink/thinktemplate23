// Import the gsap library
import gsap from "gsap";

// Function to clear the styling (inline styles) from an element
function clearStyling(el) {
    el.removeAttribute("style");
}

// Slide elements in from the right
export const slideInRight = function (item, duration = 2, delay = 0) {
    let tl = gsap.timeline();
    let items = document.querySelectorAll(item);

    items.forEach(el => {
        tl.fromTo(
            el,
            { x: "-150%" }, // From: Start position (x: -150%)
            {
                x: 0, // To: End position (x: 0)
                duration: duration,
                ease: "power2",
                delay: delay,
                onComplete: function () {
                    clearStyling(el); // Reset styles after the animation is completed
                },
            }
        );
    });
};

// Slide elements in from the left
export const slideInLeft = function (item, duration = 2, delay = 0) {
    let tl = gsap.timeline();
    let items = document.querySelectorAll(item);

    items.forEach(el => {
        tl.fromTo(
            el,
            { x: "150%" }, // From: Start position (x: 150%)
            {
                x: 0, // To: End position (x: 0)
                duration: duration,
                ease: "power2",
                delay: delay,
                onComplete: function () {
                    clearStyling(el); // Reset styles after the animation is completed
                },
            }
        );
    });
};

// Fade elements in from the bottom and scale up
export const appearFromBottom = function (item, duration = 2, delay = 0) {
    let tl = gsap.timeline();
    let items = document.querySelectorAll(item);

    items.forEach(el => {
        tl.fromTo(
            el,
            { opacity: 0, scale: 0.5, y: 50 }, // From: Start position (opacity: 0, scale: 0.5, y: 50)
            {
                opacity: 1, // To: End opacity (opacity: 1)
                scale: 1, // To: End scale (scale: 1)
                y: 0, // To: End position (y: 0)
                duration: duration,
                ease: "power2",
                delay: delay,
                onComplete: function () {
                    clearStyling(el); // Reset styles after the animation is completed
                },
            }
        );
    });
};

// Fade elements in from the left and scale up
export const appearFromLeft = function (item, duration = 2, delay = 0) {
    let tl = gsap.timeline();
    let items = document.querySelectorAll(item);

    items.forEach(el => {
        tl.fromTo(
            el,
            { opacity: 0, scale: 0.5, x: -150 }, // From: Start position (opacity: 0, scale: 0.5, x: -150)
            {
                opacity: 1, // To: End opacity (opacity: 1)
                scale: 1, // To: End scale (scale: 1)
                x: 0, // To: End position (x: 0)
                duration: duration,
                ease: "power2",
                delay: delay,
                onComplete: function () {
                    clearStyling(el); // Reset styles after the animation is completed
                },
            }
        );
    });
};

// Fade elements in from the right and scale up
export const appearFromRight = function (item, duration = 2, delay = 0) {
    let tl = gsap.timeline();
    let items = document.querySelectorAll(item);

    items.forEach(el => {
        tl.fromTo(
            el,
            { opacity: 0, scale: 0.5, x: 150 }, // From: Start position (opacity: 0, scale: 0.5, x: 150)
            {
                opacity: 1, // To: End opacity (opacity: 1)
                scale: 1, // To: End scale (scale: 1)
                x: 0, // To: End position (x: 0)
                duration: duration,
                ease: "power2",
                delay: delay,
                onComplete: function () {
                    clearStyling(el); // Reset styles after the animation is completed
                },
            }
        );
    });
};
