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
 
  
    
  
});


// target: 'http://localhost:8000', while running local replace the target above with these