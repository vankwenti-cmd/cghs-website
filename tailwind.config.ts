import type { Config } from 'tailwindcss'

// Generate a dense spacing scale (0 to 200 in 0.25 steps) so every "n" utility
// (h-19, px-6.5, mb-4.5, etc.) resolves to n * 0.25rem, matching Tailwind's own
// convention, instead of silently producing no CSS for values outside the
// small default scale.
const denseSpacing: Record<string, string> = {}
for (let i = 0; i <= 800; i++) {
  const key = i % 4 === 0 ? String(i / 4) : (i / 4).toString()
  denseSpacing[key] = `${i * 0.25}rem`
}

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
          default: '#E6E2D4',
          strong: '#D3CFBD',
        },
        danger: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
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
      spacing: denseSpacing,
    },
  },
  plugins: [],
}
export default config
