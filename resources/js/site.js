// This is all you.
import {alpinejs, barbaJs, cookie} from "./components";
import AOS from "aos";
import gsap from "gsap";

// Animate on Scroll
AOS.init();

//Alpine
alpinejs()

// slideInRight('#company-logo', 2)
// slideInLeft('#magnifying-glass', 1, 1)
// appearFromRight('#heroText',3)
// appearFromBottom('#nav-items', .5)

// barbaJs(true);

cookie() // Only enable if google analytics is on






// NavAnimation();

function NavAnimation() {
const navBar = document.getElementById('mainNav')

    const hamburger = navBar.querySelector('button');
const navAnimationOff = navBar.classList.contains('off');
const navAnimationAppear = navBar.classList.contains('appear');

const navMobile = navBar.querySelector('#mobileNav')
const navMobileLinks = navMobile.querySelectorAll('a')

if (navAnimationOff) {
    console.log('No Animation Selected');
    return;
}

    if (navAnimationAppear) {

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            const navOpen = hamburger.classList.contains('open');


            console.log(navOpen);
            const master = gsap.timeline();
            const navTl = gsap.timeline();
            const linkTl = gsap.timeline();

            if (navOpen) {
                navTl.fromTo(navMobile,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        ease: "power1.inOut"
                    });

                navTl.fromTo(navMobileLinks,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        ease: "power1.inOut"
                    });
            } else {
                // Reverse the animations
                navTl.reverse();
                linkTl.reverse();
            }


        });

    }
}





