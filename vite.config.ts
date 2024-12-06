import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    publicDir: 'public',
    build: {
        assetsInlineLimit: 0, // Prevents inlining large assets
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    },
    assetsInclude: ['**/*.mp4'], // Ensures Vite processes .mp4 files in `src`
});
