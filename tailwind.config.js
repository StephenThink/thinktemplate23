const theme = require("tailwindcss/defaultTheme.js");
module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.yaml',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
    darkMode: 'class',
  theme: {
      debugScreens: {
          position: ['bottom', 'right'],
          ignore: ['dark'],
          style: {
              backgroundColor: '#FFC734',
              color: '#2C2F33',
              fontSize: '15px',
          },
      },
      container: {
          padding: {
              DEFAULT: '1rem',
              md: '2rem',
              lg: '3rem',
              xl: '4rem',
          },
          center: true,
          // screens: {
          //     "none": "95%",
          //     sm: '640px',
          //     md: '768px',
          //     lg: '1024px',
          //     xl: '1280px',
          //     '2xl': '1536px',
          //     '3xl': '2000px',
          // }
      },
      // screens: {
      //     "none": "100%",
      //     'chrome-mobile-s': { 'raw': '(orientation: portrait) and (min-width: 320px)'},
      //     sm: '360px',
      //     'port-pixel': { 'raw': '(orientation: portrait) and (min-width: 350px) and (max-width: 355px) and (min-height: 744px) and (max-height: 746px)'},
      //     'chrome-mobile-m': { 'raw': '(orientation: portrait) and (min-width: 375px)'},
      //     'port-iphone-sm': { 'raw': '(orientation: portrait) and (min-width: 374px) and (max-width: 391px)'},
      //     'port-samsung-flip': { 'raw': '(orientation: portrait) and (min-width: 412px) and (min-height: 1004px)' },
      //     'chrome-mobile-l': { 'raw': '(orientation: portrait) and (min-width: 425px)'},
      //     md: '740px',
      //     'land-pixel': { 'raw': '(orientation: landscape) and (min-width: 744px) and (max-width: 746px) and (min-height: 350px) and (max-height: 355px)'},
      //     'chrome-tablet': '768px',
      //     'port-ipad': { 'raw': '(orientation: portrait) and (min-width: 768px) and (min-height: 1024px)' },
      //     'port-samsung-fold': { 'raw': '(orientation: portrait) and (min-width: 768px) and (min-height: 1076px)' },
      //     'land-iphone-sm': { 'raw': '(orientation: landscape) and (min-width: 820px) and (max-width: 860px) and (min-height: 374px) and (max-height: 391px)'},
      //     'port-ipad-air': { 'raw': '(orientation: portrait) and (min-width: 820px) and (min-height: 1180px)' },
      //     'port-ipad-pro': { 'raw': '(orientation: portrait) and (min-width: 833px) and (max-width: 1025px) and (min-height: 1193px) and (max-height: 1367px)' },
      //     'port-surface': { 'raw': '(orientation: portrait) and (min-width: 912px) and (min-height: 1368px)' },
      //     lg: '980px',
      //     'land-samsung-flip': { 'raw': '(orientation: landscape) and (min-width: 1004px) and (min-height: 412px)' },
      //     'chrome-laptop': '1024px',
      //     'land-ipad': { 'raw': '(orientation: landscape) and (min-width: 1024px) and (min-height: 768px)' },
      //     'land-samsung-fold': { 'raw': '(orientation: landscape) and (min-width: 1076px) and (min-height: 768px)' },
      //     xl: '1140px',
      //     'land-ipad-air': { 'raw': '(orientation: landscape) and (min-width: 1180px) and (min-height: 820px)' },
      //     'land-ipad-pro': { 'raw': '(orientation: landscape) and (min-width: 1193px) and (max-width: 1367px) and (min-height: 833px) and (max-height: 1025px)' },
      //     'chromebook-pixel': {'min':'1279px', 'max':'1281px'},
      //     '2xl': '1360px',
      //     'land-surface': { 'raw': '(orientation: landscape) and (min-width: 1368px) and (min-height: 912px)' },
      //     'chrome-laptop-l': '1440px',
      //     '3xl': '1750px',
      //     '4xl': '1920px',
      //     '4K': '2560px',
      // },
    extend: {

        // margin: {
        //     // section: '1rem',
        //     // 'section-lg': '3rem', // between components
        //     // inner: '1rem', // Inside components
        //     // 'inner-lg': '1rem', // Inside components
        // },
        height: {
            "half" : '50vh',
            "three-quarters" : '75vh',
            "quarter" : '25vh',
            "two-thirds" : '66.66vh',
            "third" : '33.33vh',
            "full-image" : '900px',

        },
        width : {
            "half-screen" : '50vw',
            "three-quarters" : '75vw',
            "quarter" : '25vw',
            "two-thirds" : '66.66vw',
            "third" : '33.33vw',
        },
        spacing: {
            inner: '1rem',
            'sm-inner': '2rem',
            'md-inner': '3rem',
            'lg-inner': '4rem',
            section: '1rem',
            'sm-section': '2rem',
            'md-section': '3rem',
            'lg-section': '4rem',
        },
        fontFamily: {
            heading: ['ubuntu'],
            body: ['roboto'],
            // black: ['geo-black'],
            // regular: ['geo-regular'],
            // bold: ['geo-bold'],
            // "regular-italic": ['geo-regular-italic'],
            // medium: ['geo-medium'],
            // light: ['geo-light']
        },
        fontSize: {
            // "example": "7rem",

        },
        transitionProperty: {
            'background-color': 'background-color',
            'stroke-dasharray': 'stroke-dasharray, stroke-dashoffset',

        },
        transitionTimingFunction: {
            'cubic-bezier': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        transitionDuration: {
            'slow': '900ms',
            'medium': '600ms',
            'fast': '300ms',
        },
        rotate: {
            // 'example': '135deg'
        },
        minHeight : {
            // '0': '0px or %'

        },
        maxHeight : {
            // '0': '0px or %'
        },
        maxWidth : {
            // '0': '0px or %'
        },
        zIndex: {
            // '1': '1',
            'full-image':'4',
            'full-image-text':'5',
            'main-nav': '100',

        },
        colors: {
            "think-yellow": "#FFC734",
            "think-dark": "#2C2F33",
            "primary": "#FFC734",
            "secondary": "#2C2F33",
        },
        flex: {
            "none": "0 0 0%",
            "33": "1 0 33%",
            "50": "1 0 50%",
            "66": "1 0 66%",
            "100": "1 0 100%"
        },
        translate: {
            //   '1/4': '25%',
        },
        inset: {
            // '1/2': '50%'
        },
        borderRadius: {
            // '50': '50%'
        },
        scale: {
            // '200': '2'
        },
        lineHeight: {
            // 'example' : '1.1',

        },
        animation: {
            // 'slide': 'slide 16s infinite',
        },
        keyframes: {
            // slide: {
            //     '0%, 25%': { transform: 'translateX(0)' },
            //     '30%, 50%': { transform: 'translateX(-100%)' },
            //     '55%, 75%': { transform: 'translateX(-200%)' },
            //     '80%, 100%': { transform: 'translateX(-300%)' },
            // }
        },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],

}
