import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          '404': path.resolve(__dirname, '404.html'),
          'about-us': path.resolve(__dirname, 'about-us.html'),
          'contact-us': path.resolve(__dirname, 'contact-us.html'),
          faq: path.resolve(__dirname, 'faq.html'),
          features: path.resolve(__dirname, 'features.html'),
          'our-work': path.resolve(__dirname, 'our-work.html'),
          pricing: path.resolve(__dirname, 'pricing.html'),
          services: path.resolve(__dirname, 'services.html'),
          testimonial: path.resolve(__dirname, 'testimonial.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
