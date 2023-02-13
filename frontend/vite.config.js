/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        
          target: 'https://task-management-frontend-cg1s.onrender.com',
     
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


