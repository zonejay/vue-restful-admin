import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            { find: 'views', replacement: '/src/views' },
            { find: 'components', replacement: '/src/components' },
        ],
    },
    server: {
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://localhost:10888',
            },
        },
    },
});
