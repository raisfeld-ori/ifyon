import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'blob': 'blob 7s infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float-3d-1': 'float3d1 12s ease-in-out infinite',
        'float-3d-2': 'float3d2 15s ease-in-out infinite',
        'float-3d-3': 'float3d3 18s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        twinkle: {
          '0%': { opacity: '0.3', transform: 'scale(0.8)', filter: 'blur(1px)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)', filter: 'blur(0px)' },
          '100%': { opacity: '0.3', transform: 'scale(0.8)', filter: 'blur(1px)' },
        },
        float3d1: {
          '0%, 100%': { transform: 'translateZ(20px) rotateX(10deg) rotateY(-10deg)' },
          '25%': { transform: 'translateZ(50px) rotateX(-5deg) rotateY(15deg)' },
          '50%': { transform: 'translateZ(30px) rotateX(-15deg) rotateY(-5deg)' },
          '75%': { transform: 'translateZ(40px) rotateX(5deg) rotateY(-20deg)' },
        },
        float3d2: {
          '0%, 100%': { transform: 'translateZ(30px) rotateX(-12deg) rotateY(5deg)' },
          '25%': { transform: 'translateZ(60px) rotateX(7deg) rotateY(-10deg)' },
          '50%': { transform: 'translateZ(20px) rotateX(17deg) rotateY(7deg)' },
          '75%': { transform: 'translateZ(40px) rotateX(-7deg) rotateY(12deg)' },
        },
        float3d3: {
          '0%, 100%': { transform: 'translateZ(40px) rotateX(15deg) rotateY(10deg)' },
          '25%': { transform: 'translateZ(20px) rotateX(-10deg) rotateY(-15deg)' },
          '50%': { transform: 'translateZ(50px) rotateX(5deg) rotateY(20deg)' },
          '75%': { transform: 'translateZ(30px) rotateX(-15deg) rotateY(-5deg)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animation-delay-2000': {
          'animation-delay': '2000ms',
        },
        '.animation-delay-2500': {
          'animation-delay': '2500ms',
        },
        '.animation-delay-3000': {
          'animation-delay': '3000ms',
        },
        '.animation-delay-3500': {
          'animation-delay': '3500ms',
        },
        '.animation-delay-4000': {
          'animation-delay': '4000ms',
        },
        '.perspective-1000': {
          'perspective': '1000px',
          'transform-style': 'preserve-3d',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

export default config 