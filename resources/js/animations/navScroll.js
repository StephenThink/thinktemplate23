import gsap from "gsap";

const navScroll = () => {
    const navBar = document.getElementById('mainNav');
    const show = navBar.classList.contains('show-on-scroll-up');

    const animeOpacity = navBar.classList.contains('anime-opacity');
    const animeShrink = navBar.classList.contains('anime-shrink');
    const animeZoom = navBar.classList.contains('anime-zoom');

    if (show) {

        let lastScrollTop = 0;
        const master = gsap.timeline({paused: true, duration: 0.5, ease: "power1.inOut"});

        if (animeOpacity) {

            master.to(navBar,
                {
                    opacity: 0,
                    autoAlpha: 0,
                }
            );
        }

        if (animeShrink) {
            master
                .to(navBar.children,
                    {
                        height: 0,
                        autoAlpha: 0,
                    })
                .to(navBar,
                    {
                        height: 0,
                        autoAlpha: 0,

                    },"-=0.5");

        }

        if (animeZoom) {
            master
                // .to(navBar.children,
                //     {
                //         height: 0,
                //         autoAlpha: 0,
                //     })
                .to(navBar,
                    {
                        skewX: -30,
                    }
                )
                .to(navBar, {
                    x: '110%',
                }, "-=0.2")
                .to(navBar, {
                    opacity: 0,
                })
            ;

        }


        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop) {
                // Scrolling down
                master.play();
            } else {

                master.reverse();
                // Scrolling up or at the top

            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        });
    }
}



export default navScroll;


