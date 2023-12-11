import gsap from "gsap";

const navMobile = () => {
    const navBar = document.getElementById('mainNav');
    if (!navBar) return; // Ensure the element exists before proceeding

    const anime = navBar.dataset.animationType;
    const hamburger = navBar.querySelector('button');
    if (!hamburger.clientHeight > 0) return;

    const navMobile = navBar.querySelector('#mobileNav');


    // const navMobileLinks = navMobile.querySelectorAll('a')
    const navMobileLinks = Array.from(navMobile.children);

    hamburger.addEventListener('click', () => {
        let state = hamburger.dataset.stateType;
        const master = gsap.timeline();
        const navTl = gsap.timeline();
        const linkTl = gsap.timeline();

        if (anime === 'off') {
            return;
        }

        if (anime === 'appear') {
            if (state === 'open') {
                // Loop through each navMobileLink item
                navMobileLinks.forEach((link, index) => {
                    // Animate each link separately
                    linkTl.fromTo(link,
                        {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            duration: 0.5, // Adjust duration as needed
                            ease: "power1.inOut",
                            // Stagger the animation for each item
                            stagger: 0.2, // Adjust stagger duration as needed
                            // Offset the start time for each link
                            // delay: index * 0.2, // Adjust delay as needed
                        });
                });

                // Add the linksTimeline to the main timeline (navTl)
                navTl.add(linkTl);
            } else {
                // Reverse the animations
                navTl.reverse();
                linkTl.reverse();
            }

        }

        if (anime === 'drop') {
            if (state === 'open') {
                // Loop through each navMobileLink item
                navMobileLinks.forEach((link, index) => {
                    // Animate each link separately
                    linkTl.fromTo(link,
                        {
                            y: '-50px',
                            opacity: 0,
                        },
                        {
                            y: '0px',
                            opacity: 1,
                            duration: 0.5, // Adjust duration as needed
                            ease: "power1.inOut",
                            // Stagger the animation for each item
                            stagger: 0.2, // Adjust stagger duration as needed
                            // Offset the start time for each link
                            // delay: index * 0.2, // Adjust delay as needed
                        });
                });

                // Add the linksTimeline to the main timeline (navTl)
                navTl.add(linkTl);
            } else {
                // Reverse the animations
                navTl.reverse();
                linkTl.reverse();
            }
        }

        if (anime === 'left') {
            if (state === 'open') {
                // Loop through each navMobileLink item
                navMobileLinks.forEach((link, index) => {
                    // Animate each link separately
                    linkTl.fromTo(link,
                        {
                            x: '-150px',
                            opacity: 0,
                        },
                        {
                            x: '0px',
                            opacity: 1,
                            duration: 0.5, // Adjust duration as needed
                            ease: "power1.inOut",
                            // Stagger the animation for each item
                            stagger: 0.2, // Adjust stagger duration as needed
                            // Offset the start time for each link
                            // delay: index * 0.2, // Adjust delay as needed
                        });
                });

                // Add the linksTimeline to the main timeline (navTl)
                navTl.add(linkTl);
            } else {
                // Reverse the animations
                navTl.reverse();
                linkTl.reverse();
            }
        }

    });
}

export default navMobile;
