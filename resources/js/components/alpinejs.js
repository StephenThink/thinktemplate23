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
                this.open = !this.open;
            },
        }));

        // This is used for Flip Cards
        // Define another Alpine data property called 'flip_card'.
        Alpine.data('flip_card', () => ({
            flipped: false,
            toggle() {
                this.flipped = !this.flipped;
            },
        }));
    });

    // Start Alpine.js to initialize the components and data properties.
    Alpine.start();
};

// Export the 'alpinejs' function as the default export of this module.
export default alpinejs;
