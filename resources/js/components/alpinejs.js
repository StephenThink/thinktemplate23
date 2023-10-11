// Import the Alpine.js library as 'Alpine'.
import Alpine from 'alpinejs';

// Import the 'focus' plugin from '@alpinejs/focus'.
import focus from '@alpinejs/focus';

// Define the 'alpinejs' function.
const alpinejs = () => {

    // Register the 'focus' plugin with Alpine.
    Alpine.plugin(focus);

    // Set 'Alpine' as a global variable accessible from the window object.
    window.Alpine = Alpine;

    // Add an event listener for the 'alpine:init' event.
    document.addEventListener("alpine:init", () => {
        // This is used for Modal Cards
        // Define a new Alpine data property called 'full_card'.
        Alpine.data('full_card', () => ({
            open: false,
            toggle() {
                this.open =!this.open;
            },
        }));

        Alpine.data('brick_gallery', () => ({
            open: false,
            title: '',
            imageUrl: '',
            altText: '',
            content: '',
            link: '',
            close(){
              this.open = false;
            },
            appear(){
                this.open = true;
            },
            toggle(imageUrl, altText, title, content, link) {
                this.title = title;
                this.imageUrl = imageUrl;
                this.altText = altText;
                this.content = content;
                this.link = link;
                this.open = !this.open;
            },
            hover(imageUrl, altText, title, content, link) {
                this.title = title;
                this.imageUrl = imageUrl;
                this.altText = altText;
                this.content = content;
                this.link = link;
                this.open = false;
            },
        }));

        // This is used for Flip Cards
        // Define another Alpine data property called 'flip_card'.
        Alpine.data('flip_card', () => ({
            flipped: false,
            toggle() {
                this.flipped =!this.flipped;
            },
        }));

        // This is used for the light/dark mode toggle
        // Define a new Alpine component called 'light-switch'.
        Alpine.data('theme_changer', () => ({
            isDarkMode: false,

            toggleDarkMode() {
                this.isDarkMode = !this.isDarkMode;
                this.updateTheme();
            },

            updateTheme() {
                const html = document.documentElement;
                const theme = this.isDarkMode ? 'dark' : 'light';
                html.classList.toggle('dark', this.isDarkMode);
                localStorage.setItem('thinkcreative.theme', theme);
            },

            init() {
                const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                this.isDarkMode = (localStorage.getItem('thinkcreative.theme') || preferredTheme) === 'dark';
                this.updateTheme();
            },
        }));


    });

    // Start Alpine.js to initialize the components and data properties.
    Alpine.start();
};

// Export the 'alpinejs' function as the default export of this module.
export default alpinejs;
