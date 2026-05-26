const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  // Class-based dark mode so .dark on <html> activates both Chaoran's CSS vars
  // (already keyed off .light/.dark in globals.css) AND Tailwind's dark: variants.
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        fore: {
          primary: 'var(--color-fore-primary)',
          secondary: 'var(--color-fore-secondary)',
          subtle: 'var(--color-fore-subtle)',
        },
        back: {
          primary: 'var(--color-back-primary)',
          secondary: 'var(--color-back-secondary)',
          subtle: 'var(--color-back-subtle)',
          accent: 'var(--color-back-accent)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-fira-code)', ...fontFamily.mono],
        // Serif candidates for pillar number A/B (Task 2.3). Pick one in Stage 2.
        'serif-fraunces': ['var(--font-fraunces)', ...fontFamily.serif],
        'serif-caslon': ['var(--font-libre-caslon)', ...fontFamily.serif],
        'serif-source': ['var(--font-source-serif)', ...fontFamily.serif],
      },
      animation: {
        'blob-spin': 'blobbing 25s linear infinite',
      },
      keyframes: {
        blobbing: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
}
