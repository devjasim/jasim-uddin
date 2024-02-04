import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            boxShadow: {
                dark: '3px 3px 1px 2px rgba(10, 23, 47, 0.75)',
                light: '3px 3px 1px 2px rgba(13, 187, 181, 0.30)',
                outline: '2px 2px 0 1px rgba(14, 187, 180, 0.75)',
            },
            colors: {
                background: '#0A182F',
                primary: '#0EBBB4',
                secondary: '#112240',
                text: {
                    DEFAULT: '#ccd6f6',
                    100: '#8892b0',
                    transparent: {
                        dark: 'hsl(0 0% 100% / 0.1)',
                        light: 'hsla(217, 65%, 11%, .3)',
                    },
                    gradient: {
                        dark: 'linear-gradient(90deg, #8892b0, #8892b0))',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
