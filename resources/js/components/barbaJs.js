// import gsap from 'gsap';
import barba from '@barba/core';
import gsap from "gsap";
import pageLoad from "./pageLoad";

const barbaJs = function (debug = false) {


    barba.init({
        debug: debug,
        transitions: [{
            sync: true,
            name: 'opacity-transition',
            leave(data) {
                console.log('Leave hook triggered!');
                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                console.log('Enter hook triggered!');
                return gsap.from(data.next.container, {
                    opacity: 0
                });
            }
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
