// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      spacing: {
        'none': '0',
        '2xs': '4px',  // calc(0.25 * 1rem)
        'xs': '8px',   // calc(0.5 * 1rem)
        'sm': '12px',  // calc(0.75 * 1rem)
        'md': '20px',  // calc(1.25 * 1rem)
        'lg': '32px',  // calc(2 * 1rem)
        'xl': '52px',  // calc(3.25 * 1rem)
        '2xl': '84px', // calc(5.25 * 1rem)
      },
      colors: {
        black: '#000000',
        'lite-black': '#464748',
        white: '#ffffff',
        'lite-gray': '#d3d3d3',
        'dark-gray': '#808080',
        gray: '#fcfcfc',
        'lite-yellow': '#efe249',
        success: '#20be79',
        error: '#d90707',
        warning: '#B44F00',
        'white-high': 'rgba(255, 255, 255, 1)',
        'white-medium': 'rgba(255, 255, 255, 0.91)',
        'white-disabled': 'rgba(255, 255, 255, 0.64)',
        'black-high': 'rgba(0, 0, 0, 0.85)',
        'black-medium': 'rgba(0, 0, 0, 0.64)',
        'black-disabled': 'rgba(0, 0, 0, 0.43)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '“Segoe UI”', '“Roboto”', '“Oxygen”', '“Ubuntu”', '“Cantarell”', '“Fira Sans”', '“Droid Sans”', '“Helvetica Neue”', 'sans-serif'],
      },
      fontWeight: {
        'heading-1': 300,
        'heading-2': 300,
        'heading-3': 300,
        'heading-4': 300,
        'heading-5': 400,
        'heading-6': 400,
        'subheading-1': 600,
        'subheading-2': 600,
        'body-text': 400,
        'body-ui': 400,
        'caption': 400,
        'overline': 600,
      },
      letterSpacing: {
        'heading-1': '-2px',
        'heading-2': '-1.5px',
        'heading-3': '-1px',
        'heading-4': '-0.3px',
        'heading-5': '0px',
        'heading-6': '0.1px',
        'subheading-1': '0.2px',
        'subheading-2': '0.3px',
        'body-text': '0.2px',
        'body-ui': '0.3px',
        'caption': '0.5px',
        'overline': '2px',
      },
      lineHeight: {
        'heading-1': '1.3',
        'heading-2': '1.3',
        'heading-3': '1.3',
        'heading-4': '1.6',
        'heading-5': '1.5',
        'heading-6': '1.6',
        'subheading-1': '1.8',
        'subheading-2': '1.8',
        'body-text': '1.7',
        'body-ui': '1.7',
        'caption': '1.6',
        'overline': '1.6',
      },
      fontSize: {
        'heading-1': '6rem',       // 96/16
        'heading-2': '4.25rem',    // 68/16
        'heading-3': '3.375rem',   // 54/16
        'heading-4': '2.25rem',    // 36/16
        'heading-5': '1.5rem',     // 24/16
        'heading-6': '1.25rem',    // 20/16
        'subheading-1': '1rem',    // 16/16
        'subheading-2': '0.875rem',// 14/16
        'body-text': '1rem',       // 16/16
        'body-ui': '0.875rem',     // 14/16
        'caption': '0.75rem',      // 12/16
        'overline': '0.625rem',    // 10/16
      },
    },
  },
  plugins: [],
};
