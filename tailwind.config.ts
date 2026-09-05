import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#7D7847',
          900: '#726D40',
          800: '#8B8653',
          700: '#696339',
          600: '#9A9569',
          500: '#ABA680',
        },
        cyan: {
          50: '#FFF7EA',
          100: '#FFEBD1',
          200: '#FFD9A6',
          300: '#FFDCA8',
          400: '#FFB13D',
          500: '#FF9E0A',
          600: '#EE8B00',
          700: '#A96200',
          800: '#7E4900',
          900: '#5F5B33',
        },
        slate: {
          300: '#F2F0E5',
          400: '#E8E5D6',
        },
        surface: {
          page: '#FAF8F2',
          card: '#FFFFFF',
          sunken: '#F2EFE4',
        },
        text: {
          primary: '#141414',
          secondary: '#5C5A4E',
          tertiary: '#8E8A78',
        },
        border: {
          default: '#E8E5D6',
          strong: '#ABA680',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui'],
        body: ['var(--font-body)', 'system-ui'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
export default config
