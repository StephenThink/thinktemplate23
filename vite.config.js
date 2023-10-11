import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/js/site.js',
                'resources/css/error404.css',
                'resources/css/components/flipCard.css',
                'resources/css/components/brickGallery.css',
                'resources/css/components/masonryGallery.css',
                // You can add more files here as needed.
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
    ],
});
