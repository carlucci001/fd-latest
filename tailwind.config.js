/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B4D83',
          50: '#E6F0F7',
          100: '#CCE0EF',
          200: '#99C2DF',
          300: '#66A3CF',
          400: '#3385BF',
          500: '#0B4D83',
          600: '#093E69',
          700: '#072E4F',
          800: '#041F34',
          900: '#020F1A'
        },
        secondary: {
          DEFAULT: '#2AB573',
          50: '#EBF9F2',
          100: '#D7F3E5',
          200: '#AFE7CB',
          300: '#87DBB1',
          400: '#5FCF97',
          500: '#2AB573',
          600: '#22915C',
          700: '#196D45',
          800: '#11482E',
          900: '#082417'
        }
      },
      backgroundColor: {
        dark: '#000000',
        light: '#ffffff'
      },
      textColor: {
        dark: '#ffffff',
        light: '#000000'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(11, 77, 131, 0.3)',
        'glow-lg': '0 0 30px rgba(11, 77, 131, 0.4)',
      }
    },
  },
  plugins: [],
};
