const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');
const { colors } = require('tailwindcss/defaultTheme');

const svelteClassColonExtractor = (content) => {
  return content.match(/(?<=class:)([a-zA-Z0-9_-]+)/gm) || [];
};

let step = 2;
let spacing = {
  'px': '1px'
};
for (let i = 0; i < 65; i++) {
  spacing[i.toString()] = `${i * step}px`;
}


module.exports = {
  // purge: {
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: ['./src/**/*.svelte', './src/**/*.html', './src/**/*.css', './index.html'],
  //   preserveHtmlElements: true,
  //   options: {
  //     safelist: [/svelte-/],
  //     defaultExtractor: (content) => {
  //       // WARNING: tailwindExtractor is internal tailwind api
  //       // if this breaks after a tailwind update, report to svite repo
  //       return [...tailwindExtractor(content), ...svelteClassColonExtractor(content)];
  //     },
  //     keyframes: true,
  //   },
  // },
  theme: {
    spacing,
    fontSize: {
      sm: ['12px', '18px'],
      label: ['13px', '21px'],
      'sm-1': ['13px', '19px'],
      base: ['14px', '22px'],
      'base-1': ['15px', '22px'],
      lg: ['16px', '24px'],
      xl: ['18px', '26px'],
      '2xl': ['20px', '28px'],
      '3xl': ['22px', '30px'],
      '4xl': ['24px', '32px'],
      '5xl': ['26px', '34px'],
      '6xl': ['28px', '36px'],
      '7xl': ['30px', '38px'],
    },
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
    colors: {
      ...colors,
      primary: {
        lighter: '#12d69c',
        default: '#10c5a3',
        dark: '#0ea77a',
      },
      secondary: {
        lighter: '#162533',
        default: '#0E1821',
        dark: '#060b0f',
      },
      secondary2: {
        default: '#242223',
      },
      info: {
        default: '#4F4F4F',
      },
      stroke: {
        default: '#e8ecef',
      },
      blue: {
        default: '#1683AE',
        lighten: '#D8F2FF'
      },
      gray: {
        100: '#9095AD',
        200: '#777C94',
        300: '#5D627A',
        400: '#444961',
        500: '#2A2F47',
        600: '#11162E',
        700: '#000014',
        darken: '#2A2F47',
        a: '#DFE2F0',
      },
      green: {
        100: '#dffdf2',
        200: '#38f2af',
        300: '#20f0a6',
        400: '#10e79a',
        500: '#0ECF8A',
        600: '#0cb77a',
        700: '#0b9f6a',
        800: '#09875a',
        900: '#086f4a',
        default: '#0ECF8A',
      },
      red: {
        100: '#fdecec',
        200: '#f39092',
        300: '#f0797c',
        400: '#ee6265',
        500: '#eb4b4f',
        600: '#e83439',
        700: '#e61d22',
        800: '#d2171c',
        900: '#bb1519',
        default: '#eb4b4f',
        darken: '#e83439',
        lighten: '#ee6265',
      },
      tetriary: {
        default: '#E2E8F1',
        darken: '#BAC5D6',
        lighter: '#EBEEF0',
        lighter2: '#F7F8FC',
      },
      yellow: {
        default: '#C5A32F',
        darken: '#B48E10',
        lighten: '#FFF3CD'
      },

    },
  },
  variants: {},
  plugins: [
    require('tailwind-css-variables')(
      {
        //modules
      },
      {
        //options
      }
    )
  ],
};
