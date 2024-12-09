import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio-website-professional/', // Set the base to your repository name
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Include GLB assets
  server: {
    host: '0.0.0.0', // Allows access from mobile devices
    port: 5173,       // Default port for Vite server
    historyApiFallback: true, // Ensure fallback to index.html for SPA routing
    watch: {
      usePolling: true, // Avoids caching issues in mobile browsers
    },
  },
});



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.glb'],
//   base: '/my-portfolio-website-professional', // Set the base to your repository name
// });
