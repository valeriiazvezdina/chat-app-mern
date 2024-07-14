import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { LOCALHOST } from './src/utils/STRINGS';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true,
                secure: false,
                ws: false
            }
        }
    },
});
