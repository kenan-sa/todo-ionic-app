import { defineConfig } from 'vite';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
// import eslintPlugin from 'vite-plugin-eslint';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), //
        legacy(),
        // eslintPlugin({
        //     // Optional: if you want to enable linting during development
        //     cache: false,
        // }),
    ],
    resolve: {
        alias: [
            {
                find: '@/assets',
                replacement: path.resolve(__dirname, 'assets'),
            }, //

            { find: '@', replacement: path.resolve(__dirname, 'src') }, //

            // this is needed as they are not imported under @/..
            { find: 'app', replacement: path.resolve(__dirname, 'src/app') },

            {
                find: 'rw-jorder-shared',
                replacement: path.resolve(__dirname, 'src/rw-jorder-shared'),
            },

            {
                find: 'rw-jorder-portals-shared',
                replacement: path.resolve(
                    __dirname,
                    'src/rw-jorder-portals-shared'
                ),
            },
            {
                find: 'rw-jorder-web-shared',
                replacement: path.resolve(
                    __dirname,
                    'src/rw-jorder-web-shared'
                ),
            },

            {
                find: 'rw-jorder-web-shared',
                replacement: path.resolve(
                    __dirname,
                    'src/rw-jorder-web-shared'
                ),
            },

            {
                find: 'rw-ts-common',
                replacement: path.resolve(__dirname, 'src/rw-ts-common'),
            },
        ],
    },

    define: {
        // add to fix issues with next-redux-wrapper searhcing for process.env.** -- process not avaiable in vite.
        'process.env.IS_PREACT': JSON.stringify('true'),
    },

    // test: {
    //     globals: true,
    //     environment: 'jsdom',
    //     setupFiles: './src/setupTests.ts',
    // },
});
