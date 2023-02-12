/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
       //target: 'http://localhost:8000'

          target: 'https://api.render.com/deploy/srv-cfjgfipa6gductikhn50?key=i1Os90nhTZo',
     
     },
   },
  },
 
    // build: {
    //   // generate manifest.json in outDir
    //   manifest: true,
    //   rollupOptions: {
    //     // overwrite default .html entry
    //     input: '/path/to/index.js',
    //   },
    // },
    
  
});


