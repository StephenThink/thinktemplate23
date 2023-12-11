// This is all you.
import {alpinejs, barbaJs, cookie, navbars} from "./components";
import AOS from "aos";
import "@fontsource/ubuntu";
import "@fontsource/roboto";
import {navLinks, navMobile, navScroll} from "./animations/index.js";

import gsap from "gsap";




// Animate on Scroll
AOS.init();

//Alpine
alpinejs();

// slideInRight('#company-logo', 2)
// slideInLeft('#magnifying-glass', 1, 1)
// appearFromRight('#heroText',3)
// appearFromBottom('#nav-items', .5)

barbaJs();

cookie(); // Only enable if google analytics is on


navbars()


