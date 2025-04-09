/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

import TWPluginSafeAreaCapacitor from 'tailwindcss-safe-area-capacitor';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // app specific colors
                // ...
            },
        },
    },

    plugins: [TWPluginSafeAreaCapacitor],
} as Config;
