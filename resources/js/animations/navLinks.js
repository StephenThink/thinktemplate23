import gsap from "gsap";

const siteLinks = document.querySelectorAll('#siteLinks a');
const tl = gsap.timeline({paused: true, duration: 0.3});

const navLinks = () => {

siteLinks.forEach((link, index) => {
    gsap.set(link,
        {
            opacity: 0,
            y: 10
        }
        );

    tl
        .to(link,{
            opacity: 1,
            y: -10,
            rotate: '-5deg',
        },"-=0.5")
        .to(link,{
            rotate: '5deg',
        })
        .to(link,{
            y: 0,
            rotate: '0deg'
        });
});


document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    tl.play();
});
}

export default navLinks;
