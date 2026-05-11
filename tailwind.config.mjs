/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        card: '#18181b',
        accent: '#a78bfa',
        'accent-dim': 'rgba(167,139,250,0.15)',
        text: '#e4e4e7',
        'text-muted': '#a1a1aa',
        border: '#27272a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(167,139,250,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(167,139,250,0.3)' },
        },
      },
    },
  },
  plugins: [],
};
