import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['var(--font-cormorant)', 'Georgia', 'serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'Helvetica', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        // Override Tailwind's default black with Design System black
        black: '#282828',
        // Design System palette
        'ds-grey': '#858585',
        'ds-disable': '#B7B7B7',
        'ds-placeholder': '#D3D3D3',
        'ds-border': '#EEEEEE',
        'ds-overlay': '#1B1B1B',
        'ds-bg': '#FAFAFA',
      },
      fontSize: {
        'ds-h1': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'ds-h2': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'ds-h3': ['18px', { lineHeight: '1.3', fontWeight: '700' }],
        'ds-body': ['16px', { lineHeight: '1.5' }],
        'ds-caption': ['12px', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
}

export default config
