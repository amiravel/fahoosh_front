// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
      '@/public/assets/css/style.css',
  ], // Corrected path
  compatibilityDate: '2024-11-01', // Optional; include only if necessary
  devtools: { enabled: true }, // Enable development tools
  postcss: {
    plugins: {
      tailwindcss: {}, // Tailwind CSS integration
      autoprefixer: {}, // Auto-prefixer for CSS compatibility
    },
  },
});
