// This is all you.
import {alpinejs, barbaJs, lightSwitch} from "./components";
import AOS from "aos";

// Animate on Scroll
AOS.init();

//Alpine
alpinejs()

// Change from Light Mode to Dark Mode.
lightSwitch()


// slideInRight('#company-logo', 2)
// // slideInLeft('#magnifying-glass', 1, 1)
// appearFromRight('#heroText',3)
// appearFromBottom('#nav-items', .5)

barbaJs(true);
