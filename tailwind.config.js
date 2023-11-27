/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/**/*.{js,jsx,mdx}'],
  mode: 'JIT',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '32px',
          xl: '20px',
        },
      },

      colors: {
        white: '#FFFFFF',
        ui_dark: '#323232',
        ui_purple: '#63436D',
        ui_purpleLight: '#9C7C9C',
        ui_red: '#FE0202',
        ui_overlay: '#323232CC',
      },

      boxShadow: {
        ui_darkShadow: '0px 4px 4px rgba(32, 32, 32, 0.75)',
        ui_lightShadow: '0px 2px 4px rgba(32, 32, 32, 0.4)',
        ui_headerShadow: '0px 2px 4px 0px rgba(50, 50, 50, 0.40)',
      },

      content: {
        whiteEllipse: 'url("/icons/white-ellipse.svg")',
        coloredEllipse: 'url("/icons/colored-ellipse.svg")',
      },

      fontFamily: {
        ui_garamond: ['var(--font-eb_garamond)'],
        ui_montserrat: ['var(--font-montserrat)'],
      },

      fontSize: {
        // d-desktop t-tablet m-mobile
        ui_d_h1: [
          '70px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_t_h1: [
          '60px',
          {
            lineHeight: '0.9',
            fontWeight: '400',
          },
        ],
        ui_m_h1: [
          '40px',
          {
            lineHeight: '0.9',
            fontWeight: '400',
          },
        ],
        ui_d_h2: [
          '56px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_t_h2: [
          '40px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_m_h2: [
          '32px',
          {
            lineHeight: '0.9',
            fontWeight: '400',
          },
        ],
        ui_d_body1: [
          '20px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_t_body1: [
          '18px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_m_body1: [
          '16px',
          {
            lineHeight: '1',
            fontWeight: '400',
          },
        ],
        ui_d_body2: [
          '24px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],
        ui_t_m_body2: [
          '20px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],
        ui_d_advantages: [
          '64px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],
        ui_t_advantages: [
          '56px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],
        ui_m_advantages: [
          '40px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],
        ui_d_quote: [
          '40px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_t_quote: [
          '28px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_m_quote: [
          '24px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_d_t_description: [
          '24px',
          {
            lineHeight: '1.1',
            fontWeight: '700',
          },
        ],
        ui_m_description: [
          '22px',
          {
            lineHeight: '1.1',
            fontWeight: '700',
          },
        ],
        ui_d_description2: [
          '30px',
          {
            lineHeight: '1.1',
            fontWeight: '700',
          },
        ],
        ui_t_description2: [
          '26px',
          {
            lineHeight: '1.1',
            fontWeight: '700',
          },
        ],
        ui_d_items: [
          '24px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_t_items: [
          '20px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_m_items: [
          '18px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_d_t_price: [
          '20px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],
        ui_m_price: [
          '18px',
          {
            lineHeight: '1.1',
            fontWeight: '500',
          },
        ],
        ui_d_t_mini: [
          '16px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
        ui_m_mini: [
          '14px',
          {
            lineHeight: '1.1',
            fontWeight: '400',
          },
        ],
      },

      // content: {
      //   // crossIcon: 'url("/icons/error-cross.svg")',
      // },
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
};
