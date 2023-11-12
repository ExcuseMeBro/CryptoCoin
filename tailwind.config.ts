/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './directives/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        maxWidth: '1184px',
      },
      colors: {
        red: '#F7483B',
        dark: {
          DEFAULT: '#10161C',
        },
        blue: {
          DEFAULT: '#113488',
          1: '#1B2531',
          100: '#2B58C4',
        },
        gray: {
          1: '#707377',
          2: '#A8ABB2',
          3: '#D5D7DB',
          4: '#F7F8FA',
          5: '#EEEFF1',
          6: '#EDEFF2',
          7: '#E3E4E8',
        },
      },
      lineHeight: {
        120: '120%',
        130: '130%',
        140: '140%',
      },
      fontSize: {
        xxs: '13px',
        '2.5xl': '28px',
        '3.5xl': '32px',
      },
      boxShadow: {
        'article-card': '0px 4px 16px 0px rgba(16, 22, 28, 0.04);',
        'partner-card':
          ' 0px 2.76726px 2.21381px 0px rgba(0, 0, 0, 0.03), 0px 6.6501px 5.32008px 0px rgba(0, 0, 0, 0.02), 0px 12.52155px 10.01724px 0px rgba(0, 0, 0, 0.02), 0px 22.33631px 17.86905px 0px rgba(0, 0, 0, 0.01), 0px 41.77761px 33.42209px 0px rgba(0, 0, 0, 0.01), 0px 100px 80px 0px rgba(0, 0, 0, 0.01)',
      },
      borderColor: {
        1: '#E3E4E8'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
        26: '26',
        27: '27',
        28: '28',
        29: '29',
        40: '40',
      },
    },
  },
  plugins: [],
}
