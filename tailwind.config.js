/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const lineHeight = '140%';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        lofi: {
          ...require('daisyui/src/theming/themes')['[data-theme=lofi]'],
          primary: '#0F97F2',
          'primary-focus': '#4BB4FA',
          'primary-content': '#085FA6',
          secondary: '#6950ab',
          'secondary-focus': '#795cc4',
          'secondary-content': '#372a59',
        },
      },
      'dracula',
    ],
  },
  theme: {
    screens: {
      xs: '410px',
      sm: '570px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },

    extend: {
      animation: {
        l2r: 'l2r 10s ease-in-out infinite',
        r2l: 'r2l 10s ease-in-out infinite',
      },
      keyframes: {
        l2r: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        r2l: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'hero-projects': "url('/imgs/projects-hero.png')",
      },
      colors: {
        'transparent-dark': 'rgba(0, 0, 0, 0.1)',
        'overlay-dark': 'rgba(0, 0, 0, .8)',
        'transparent-light': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', ...defaultTheme.fontFamily.sans],
        lexendDeca: [
          'var(--font-lexend-deca)',
          ...defaultTheme.fontFamily.serif,
        ],
        kalam: ['var(--font-kalam)', ...defaultTheme.fontFamily.mono],
      },
      fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      fontSize: {
        'lg-6xl': ['4.75rem', '136%'],
        'md-6xl': ['4rem', '136%'],
        'sm-6xl': ['2.5rem', '132%'],
        'lg-5xl': ['3.8125rem', lineHeight],
        'md-5xl': ['3.22rem', lineHeight],
        'sm-5xl': ['2.1rem', lineHeight],
        'lg-4xl': ['3.0625rem', lineHeight],
        'md-4xl': ['2.59rem', lineHeight],
        'sm-4xl': ['1.67rem', lineHeight],
        'lg-3xl': ['2.4375rem', lineHeight],
        'md-3xl': ['2.07rem', lineHeight],
        'sm-3xl': ['1.34rem', lineHeight],
        'lg-2xl': ['1.9375rem', lineHeight],
        'md-2xl': ['1.646rem', lineHeight],
        'sm-2xl': ['1.07rem', lineHeight],
        'lg-xl': ['1.5625rem', lineHeight],
        'md-xl': ['1.25rem', lineHeight],
        'sm-xl': ['1.025rem', lineHeight],
        lg: ['1.25rem', '160%'],
        base: ['1rem', '160%'],
        sm: ['0.875rem', '160%'],
        xs: ['0.75rem', lineHeight],
      },
      spacing: {
        '2px': '0.125rem',
        '4px': '0.25rem',
        '8px': '0.5rem',
        '12px': '0.75rem',
        '16px': '1rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '28px': '1.75rem',
        '32px': '2rem',
        '36px': '2.25rem',
        '40px': '2.5rem',
        '44px': '2.75rem',
        '48px': '3rem',
        '52px': '3.25rem',
        '56px': '3.5rem',
        '60px': '3.75rem',
        '64px': '4rem',
        '68px': '4.25rem',
        '72px': '4.5rem',
        '76px': '4.75rem',
        '80px': '5rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
