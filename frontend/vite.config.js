/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {

          target: 'http://180.150.85.195:8000',
     
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


