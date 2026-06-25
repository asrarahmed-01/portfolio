import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Electric Indigo accent
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        // Dark mode surfaces
        dark: {
          bg: '#0a0a0f',
          surface: '#111118',
          card: '#18181f',
          border: '#2a2a35',
        },
        // Light mode surfaces
        light: {
          bg: '#f8f8fc',
          surface: '#ffffff',
          card: '#f0f0f8',
          border: '#e2e2ee',
        },
      },
      animation: {
        'cursor-blink': 'blink 1.2s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-in': 'slideIn 0.5s ease-out both',
        'counter-pulse': 'counterPulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        counterPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 0 8px rgba(99, 102, 241, 0)' },
        },
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle, #2a2a35 1px, transparent 1px)',
        'grid-light': 'radial-gradient(circle, #e2e2ee 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
    },
  },
  plugins: [],
}

export default config
