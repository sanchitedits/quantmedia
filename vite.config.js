import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    root: 'rabonadev.com/veco-template',
    plugins: [],
    build: {
      outDir: '../../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: 'rabonadev.com/veco-template/index.html',
          about: 'rabonadev.com/veco-template/about-us.html',
          contact: 'rabonadev.com/veco-template/contact-us.html',
          faq: 'rabonadev.com/veco-template/faq.html',
          features: 'rabonadev.com/veco-template/features.html',
          ourWork: 'rabonadev.com/veco-template/our-work.html',
          pricing: 'rabonadev.com/veco-template/pricing.html',
          services: 'rabonadev.com/veco-template/services.html',
          testimonial: 'rabonadev.com/veco-template/testimonial.html',
          404: 'rabonadev.com/veco-template/404.html'
        }
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
