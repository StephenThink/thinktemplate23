module.exports = {
  content: [
    './resources/**/*.antlers.html',
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
          screens: {
              "none": "100%",
              sm: '540px',
              land:'650px',
              md: '720px',
              lg: '960px',
              xl: '1140px',
          }
      },
    extend: {
        screens: {
            "none": "100%",
            sm: '360px',
            "land-phone": { "raw": "(orientation: landscape) and (max-height: 480px)" },
            // land:{'min': '650px', 'max': '820px'},
            // land:{'min': '650px', 'max': '739px'},
            md: '740px',
            lg: '980px',
            xl: '1140px',
            '2xl': '1360px',
            '3xl': '1750px',
            '4xl': '1920px'

            // 'ipadPro': {'min': '541px', 'max': '1024px'},
            // 'portrait': {'raw': '(orientation: portrait)'},
        },
        margin: {
            section: '1rem',
            'section-lg': '3rem', // between components
            inner: '1rem', // Inside components
            'inner-lg': '1rem', // Inside components
        },
        height: {
            "half" : '50vh',
            "three-quarters" : '75vh',
            "quarter" : '25vh',
            "two-thirds" : '66.66vh',
            "third" : '33.33vh',
            "full-image" : '900px',

        },
        width : {
            "half-screen" : '50vw'
        },
        spacing: {
            inner: '4rem',
        },
        fontFamily: {
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
            'background-color': 'background-color'
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
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}
