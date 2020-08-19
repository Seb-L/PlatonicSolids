/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.800'),
          p: {
            color: theme('colors.gray.600'),
          },
          li: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      },
      sm: {
        css: {
          li: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      },
      md: {
        css: {
          li: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      },
      lg: {
        css: {
          li: {
            marginTop: 0,
            marginBottom: 0,
          },
          h1: {
            fontSize: theme('fontSize.4xl')
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
