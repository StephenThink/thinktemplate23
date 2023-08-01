import AOS from "aos";
import {appearFromBottom, appearFromRight, slideInRight} from "./createAnimationTimeline";

const pageLoad = function () {
    // alpinejs();
    AOS.init();
    // lightSwitch()
    slideInRight('#company-logo', 2)
// slideInLeft('#magnifying-glass', 1, 1)
    appearFromRight('#heroText',3)
    appearFromBottom('#nav-items', .5)

    console.log('Page loaded after BarbaJs');
};

export default pageLoad;
