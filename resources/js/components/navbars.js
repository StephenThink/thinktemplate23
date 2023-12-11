import gsap from "gsap";
import {navLinks, navMobile, navScroll} from "../animations/index.js";

const navbars = function () {
    const navType = document.getElementById('mainNav').dataset.navStyle;
    const navBar = document.querySelector('#mainNav');

// Mobile Navigation Animations
    navMobile();

    if(navType === 'default') {
        const show = navBar.classList.contains('show-on-scroll-up');
        const siteLinks = document.getElementById('siteLinks');
        const animateLinks = siteLinks.classList.contains('animate-links')


        // Animate Main Nav on Scroll Down.
        // If the client wants animation then run the animation script
        if (show) {
            navScroll();
        }

        // Animate Links
        if (animateLinks) {
            navLinks();
        }
    }

    if (navType === 'minimal') {

        const companyLogo = navBar.querySelector('#company-logo');
        const siteLinks = document.getElementById('siteLinks');
        const minimalLinks = siteLinks.querySelectorAll('a')
        const dropDownChevrons = siteLinks.querySelectorAll('#dropDownChevron')
        const hamburger = navBar.querySelector('#hamburger')
        const topPatty = hamburger.querySelector('#topPatty')
        const middlePatty = hamburger.querySelector('#middlePatty')
        const bottomPatty = hamburger.querySelector('#bottomPatty')


        // Setting up Timelines
        const hamburgerTl = gsap.timeline({paused: true,
            defaults: {
                duration: 0.1,
                ease: 'power2.out'
            },
            onStart: () => {
                toggleSiteLinks()
            },
            onComplete: () => {
                // pointerEvents()
            },
            onReverseComplete: () => {
                // pointerEvents()
                toggleSiteLinks()
            }

        })

        // Hamburger Timeline
        hamburgerTl.to(hamburger, {
            rotate: 90,
        }).to(bottomPatty, {
            y: -8,
        },0).to(topPatty, {
            y:8,
        },0)

        // Minimal Links
        const minimalLinksTl = gsap.timeline({paused:true, defaults: {duration: .3, ease: 'none'}})

        gsap.set(minimalLinks, {
            x: '500',
        })

        gsap.set(dropDownChevrons, {
            y: '-100',
        })

        // Move back Links to be seen
        minimalLinksTl.to(minimalLinks, { x: 0 })
        // Bring in the Chevrons so that users can see these are dropdown menus
        minimalLinksTl.to(dropDownChevrons, { y: 0, clearProps: true })




        function toggleSiteLinks() {
            // Toggle the visibility of the SiteLinks
            siteLinks.classList.toggle('hidden')
            siteLinks.classList.toggle('flex')
        }




        // Not Required as the above function covers this.
        /* This will target any links with a dropdown menu, and stop them from triggering when the menu is not displayed  */
        // function pointerEvents() {
        //     minimalLinks.forEach(link =>{
        //         if (link.classList.contains('relative')) {
        //             link.parentElement.classList.toggle("pointer-events-none");
        //         }
        //     })
        // }

        // Master Timeline
        const masterTl = gsap.timeline({
            paused: true,

        })

        masterTl.add(hamburgerTl.play())
        masterTl.add(minimalLinksTl.play())


        // Company Logo Timeline
        const companyLogoTl = gsap.timeline({
            paused:true,
            defaults: {
                duration: 0.5,
                ease: 'power2.out'
            },
            onStart: () => {
                // checkNavWidth()
            },
            onComplete: () => {

            }
        })

        gsap.set(companyLogo, {
            x: -400,
        })

        companyLogoTl.to(companyLogo, {
            x:0,
        })

        companyLogoTl.play();


        // Triggers
        hamburger.addEventListener('mouseover', () => {
            masterTl.play()
        })

        navBar.addEventListener('mouseleave', () => {
            masterTl.reverse()
        })

    }

};

export default navbars;
