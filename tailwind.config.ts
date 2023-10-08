import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'back-blue': '#101232',
        'button-green': '#A6EF67',
        'grad-dark': '#372A31',
        'banner-green': '#395C51',
      },
      height: {
        '1/7': '14.28%',
        '1/8': '12.50%',
        '1/9': '11.11%',
        '1/10': '10.00%',
        '1/15': '6.66%',
        '1/13': '7.69%',
        '1/14': '7.14%',
      }
    },
  },
  plugins: [],
}
export default config
