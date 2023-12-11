// import gsap from 'gsap';
import barba from '@barba/core';
import gsap from "gsap";
import pageLoad from "./pageLoad";

const barbaJs = function (debug = false) {

    const animateType = document.querySelector('body').dataset.barbaAnimate;

    let leaveAnimation, enterAnimation


  if (animateType === 'overlay') {
        leaveAnimation = (data) => {
            console.log('Overlay leave hook triggered!');
            return gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    data.current.container.remove();
                }
            });
        };

        enterAnimation = (data) => {
            console.log('Overlay enter hook triggered!');
            gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    pageLoad();
                }
            });
        };
    } else if (animateType === 'rotation') {
        leaveAnimation = (data) => {
            console.log('Rotation leave hook triggered!');
            return gsap.to(data.current.container, {
                rotation: 360, // Rotate 360 degrees or any desired angle
                duration: 0.5,
                onComplete: () => {
                    data.current.container.remove();
                }
            });
        };

        enterAnimation = (data) => {
            console.log('Rotation enter hook triggered!');

            gsap.from(data.next.container, {
                rotation: -360, // Rotate from -360 degrees to make it appear like a reverse rotation
                duration: 0.5,
                onComplete: () => {
                    pageLoad();
                }
            });
        };
    } else if (animateType === 'zoom') {
        leaveAnimation = (data) => {
            console.log('Zoom leave hook triggered!');
            return gsap.to(data.current.container, {
                scale: 0,
                duration: 0.5,
                onComplete: () => {
                    data.current.container.remove();
                }
            });
        };

        enterAnimation = (data) => {
            console.log('Zoom enter hook triggered!');
            gsap.from(data.next.container, {
                scale: 0,
                duration: 0.5,
                onComplete: () => {
                    pageLoad();
                }
            });
        };
    } else if (animateType === 'slide') {
        leaveAnimation = (data) => {
            console.log('Slide leave hook triggered!');
            return gsap.to(data.current.container, {
                x: '-100%', // Slide out to the left
                duration: 0.5, // Adjust the duration as needed
                onComplete: () => {
                    data.current.container.remove();
                }
            });
        };

        enterAnimation = (data) => {
            console.log('Slide enter hook triggered!');
            gsap.from(data.next.container, {
                x: '100%', // Slide in from the right
                duration: 0.5, // Adjust the duration as needed
                onComplete: () => {
                    pageLoad(); // Reinitialize Alpine.js components
                }
            });
        };
    } else if (animateType === 'opacity') {
        leaveAnimation = (data) => {
            console.log('Opacity leave hook triggered!');
            return gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.5, // Adjust the duration as needed
                onComplete: () => {
                    data.current.container.remove();
                }
            });
        };

        enterAnimation = (data) => {
            console.log('Opacity enter hook triggered!');
            gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.5, // Adjust the duration as needed
                onComplete: () => {
                    pageLoad(); // Reinitialize Alpine.js components
                }
            });
        };
    } else if (animateType === 'no')  {
        return;
    } else {
        console.error('Invalid barba-animate-type value.');
        return;
    }

    barba.init({
        debug: debug,
        transitions: [{
            sync: true,
            name: animateType + '-transition',
            leave: leaveAnimation,
            enter: enterAnimation
        }]
    });

// Reinitialize Alpine.js components after each Barba.js transition
    barba.hooks.after(() => {
        pageLoad()
    });

    let scrollX = 0
    let scrollY = 0

    barba.hooks.enter(() => {
        window.scrollTo(scrollX, scrollY)
    });


};

export default barbaJs;
