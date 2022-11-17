/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: 'var(--main)',
                navbar: 'var(--navbar)',
                'top-navbar': 'var(--top-navbar)',
                'txt-main': 'var(--text-main)',
                'txt-second': 'var(--text-second)',
                'txt-third': 'var(--text-third)',
                'txt-navbar': 'var(--text-navbar)',
                'txt-link': 'var(--text-link)',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    plugins: [],
};
