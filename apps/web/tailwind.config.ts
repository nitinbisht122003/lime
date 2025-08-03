import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";
//@ts-expect-error : nativewind/preset is not a module
import * as nativewind from "nativewind/preset";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{tsx,jsx,ts,js}",
    "../../packages/features/src/**/*.{tsx,jsx,ts,js}",
    "../../packages/ui/src/**/*.{tsx,jsx,ts,js}"
  ],
  presets: [nativewind],
  important: "html",

  // safelist: [
  //   {
  //     pattern:
  //       /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/
  //   }
  // ],

  theme: {
    fontSize: {
      "2xs": ["0.625rem", "0.75rem"],
      xs: ["0.75rem", "0.875rem"],
      sm: ["0.875rem", "1rem"],
      base: ["1rem", "1.25rem"],
      lg: ["1.125rem", "1.375rem"],
      xl: ["1.25rem", "1.5rem"],
      "2xl": ["1.5rem", "2rem"]
    },
    extend: {
      colors: {
        primary: {
          0: "rgb(var(--color-primary-0)/<alpha-value>)",
          50: "rgb(var(--color-primary-50)/<alpha-value>)",
          100: "rgb(var(--color-primary-100)/<alpha-value>)",
          200: "rgb(var(--color-primary-200)/<alpha-value>)",
          300: "rgb(var(--color-primary-300)/<alpha-value>)",
          400: "rgb(var(--color-primary-400)/<alpha-value>)",
          500: "rgb(var(--color-primary-500)/<alpha-value>)",
          600: "rgb(var(--color-primary-600)/<alpha-value>)",
          700: "rgb(var(--color-primary-700)/<alpha-value>)",
          800: "rgb(var(--color-primary-800)/<alpha-value>)",
          900: "rgb(var(--color-primary-900)/<alpha-value>)",
          950: "rgb(var(--color-primary-950)/<alpha-value>)"
        },
        secondary: {
          0: "rgb(var(--color-secondary-0)/<alpha-value>)",
          50: "rgb(var(--color-secondary-50)/<alpha-value>)",
          100: "rgb(var(--color-secondary-100)/<alpha-value>)",
          200: "rgb(var(--color-secondary-200)/<alpha-value>)",
          300: "rgb(var(--color-secondary-300)/<alpha-value>)",
          400: "rgb(var(--color-secondary-400)/<alpha-value>)",
          500: "rgb(var(--color-secondary-500)/<alpha-value>)",
          600: "rgb(var(--color-secondary-600)/<alpha-value>)",
          700: "rgb(var(--color-secondary-700)/<alpha-value>)",
          800: "rgb(var(--color-secondary-800)/<alpha-value>)",
          900: "rgb(var(--color-secondary-900)/<alpha-value>)",
          950: "rgb(var(--color-secondary-950)/<alpha-value>)"
        },
        tertiary: {
          50: "rgb(var(--color-tertiary-50)/<alpha-value>)",
          100: "rgb(var(--color-tertiary-100)/<alpha-value>)",
          200: "rgb(var(--color-tertiary-200)/<alpha-value>)",
          300: "rgb(var(--color-tertiary-300)/<alpha-value>)",
          400: "rgb(var(--color-tertiary-400)/<alpha-value>)",
          500: "rgb(var(--color-tertiary-500)/<alpha-value>)",
          600: "rgb(var(--color-tertiary-600)/<alpha-value>)",
          700: "rgb(var(--color-tertiary-700)/<alpha-value>)",
          800: "rgb(var(--color-tertiary-800)/<alpha-value>)",
          900: "rgb(var(--color-tertiary-900)/<alpha-value>)",
          950: "rgb(var(--color-tertiary-950)/<alpha-value>)"
        },
        error: {
          0: "rgb(var(--color-error-0)/<alpha-value>)",
          50: "rgb(var(--color-error-50)/<alpha-value>)",
          100: "rgb(var(--color-error-100)/<alpha-value>)",
          200: "rgb(var(--color-error-200)/<alpha-value>)",
          300: "rgb(var(--color-error-300)/<alpha-value>)",
          400: "rgb(var(--color-error-400)/<alpha-value>)",
          500: "rgb(var(--color-error-500)/<alpha-value>)",
          600: "rgb(var(--color-error-600)/<alpha-value>)",
          700: "rgb(var(--color-error-700)/<alpha-value>)",
          800: "rgb(var(--color-error-800)/<alpha-value>)",
          900: "rgb(var(--color-error-900)/<alpha-value>)",
          950: "rgb(var(--color-error-950)/<alpha-value>)"
        },
        success: {
          0: "rgb(var(--color-success-0)/<alpha-value>)",
          50: "rgb(var(--color-success-50)/<alpha-value>)",
          100: "rgb(var(--color-success-100)/<alpha-value>)",
          200: "rgb(var(--color-success-200)/<alpha-value>)",
          300: "rgb(var(--color-success-300)/<alpha-value>)",
          400: "rgb(var(--color-success-400)/<alpha-value>)",
          500: "rgb(var(--color-success-500)/<alpha-value>)",
          600: "rgb(var(--color-success-600)/<alpha-value>)",
          700: "rgb(var(--color-success-700)/<alpha-value>)",
          800: "rgb(var(--color-success-800)/<alpha-value>)",
          900: "rgb(var(--color-success-900)/<alpha-value>)",
          950: "rgb(var(--color-success-950)/<alpha-value>)"
        },
        warning: {
          0: "rgb(var(--color-warning-0)/<alpha-value>)",
          50: "rgb(var(--color-warning-50)/<alpha-value>)",
          100: "rgb(var(--color-warning-100)/<alpha-value>)",
          200: "rgb(var(--color-warning-200)/<alpha-value>)",
          300: "rgb(var(--color-warning-300)/<alpha-value>)",
          400: "rgb(var(--color-warning-400)/<alpha-value>)",
          500: "rgb(var(--color-warning-500)/<alpha-value>)",
          600: "rgb(var(--color-warning-600)/<alpha-value>)",
          700: "rgb(var(--color-warning-700)/<alpha-value>)",
          800: "rgb(var(--color-warning-800)/<alpha-value>)",
          900: "rgb(var(--color-warning-900)/<alpha-value>)",
          950: "rgb(var(--color-warning-950)/<alpha-value>)"
        },
        info: {
          0: "rgb(var(--color-info-0)/<alpha-value>)",
          50: "rgb(var(--color-info-50)/<alpha-value>)",
          100: "rgb(var(--color-info-100)/<alpha-value>)",
          200: "rgb(var(--color-info-200)/<alpha-value>)",
          300: "rgb(var(--color-info-300)/<alpha-value>)",
          400: "rgb(var(--color-info-400)/<alpha-value>)",
          500: "rgb(var(--color-info-500)/<alpha-value>)",
          600: "rgb(var(--color-info-600)/<alpha-value>)",
          700: "rgb(var(--color-info-700)/<alpha-value>)",
          800: "rgb(var(--color-info-800)/<alpha-value>)",
          900: "rgb(var(--color-info-900)/<alpha-value>)",
          950: "rgb(var(--color-info-950)/<alpha-value>)"
        },
        typography: {
          0: "rgb(var(--color-typography-0)/<alpha-value>)",
          50: "rgb(var(--color-typography-50)/<alpha-value>)",
          100: "rgb(var(--color-typography-100)/<alpha-value>)",
          200: "rgb(var(--color-typography-200)/<alpha-value>)",
          300: "rgb(var(--color-typography-300)/<alpha-value>)",
          400: "rgb(var(--color-typography-400)/<alpha-value>)",
          500: "rgb(var(--color-typography-500)/<alpha-value>)",
          600: "rgb(var(--color-typography-600)/<alpha-value>)",
          700: "rgb(var(--color-typography-700)/<alpha-value>)",
          800: "rgb(var(--color-typography-800)/<alpha-value>)",
          900: "rgb(var(--color-typography-900)/<alpha-value>)",
          950: "rgb(var(--color-typography-950)/<alpha-value>)",
          white: "#FFFFFF",
          gray: "#D4D4D4",
          black: "#181718"
        },
        outline: {
          0: "rgb(var(--color-outline-0)/<alpha-value>)",
          50: "rgb(var(--color-outline-50)/<alpha-value>)",
          100: "rgb(var(--color-outline-100)/<alpha-value>)",
          200: "rgb(var(--color-outline-200)/<alpha-value>)",
          300: "rgb(var(--color-outline-300)/<alpha-value>)",
          400: "rgb(var(--color-outline-400)/<alpha-value>)",
          500: "rgb(var(--color-outline-500)/<alpha-value>)",
          600: "rgb(var(--color-outline-600)/<alpha-value>)",
          700: "rgb(var(--color-outline-700)/<alpha-value>)",
          800: "rgb(var(--color-outline-800)/<alpha-value>)",
          900: "rgb(var(--color-outline-900)/<alpha-value>)",
          950: "rgb(var(--color-outline-950)/<alpha-value>)"
        },
        background: {
          0: "rgb(var(--color-background-0)/<alpha-value>)",
          50: "rgb(var(--color-background-50)/<alpha-value>)",
          100: "rgb(var(--color-background-100)/<alpha-value>)",
          200: "rgb(var(--color-background-200)/<alpha-value>)",
          300: "rgb(var(--color-background-300)/<alpha-value>)",
          400: "rgb(var(--color-background-400)/<alpha-value>)",
          500: "rgb(var(--color-background-500)/<alpha-value>)",
          600: "rgb(var(--color-background-600)/<alpha-value>)",
          700: "rgb(var(--color-background-700)/<alpha-value>)",
          800: "rgb(var(--color-background-800)/<alpha-value>)",
          900: "rgb(var(--color-background-900)/<alpha-value>)",
          950: "rgb(var(--color-background-950)/<alpha-value>)",
          error: "rgb(var(--color-background-error)/<alpha-value>)",
          warning: "rgb(var(--color-background-warning)/<alpha-value>)",
          muted: "rgb(var(--color-background-muted)/<alpha-value>)",
          success: "rgb(var(--color-background-success)/<alpha-value>)",
          info: "rgb(var(--color-background-info)/<alpha-value>)",
          light: "#FBFBFB",
          dark: "#181719"
        },
        indicator: {
          primary: "rgb(var(--color-indicator-primary)/<alpha-value>)",
          info: "rgb(var(--color-indicator-info)/<alpha-value>)",
          error: "rgb(var(--color-indicator-error)/<alpha-value>)"
        },
        lr: {
          green: {
            50: "rgb(var(--color-lr-green-50)/<alpha-value>)",
            100: "rgb(var(--color-lr-green-100)/<alpha-value>)",
            200: "rgb(var(--color-lr-green-200)/<alpha-value>)",
            300: "rgb(var(--color-lr-green-300)/<alpha-value>)",
            400: "rgb(var(--color-lr-green-400)/<alpha-value>)",
            500: "rgb(var(--color-lr-green-500)/<alpha-value>)",
            600: "rgb(var(--color-lr-green-600)/<alpha-value>)",
            700: "rgb(var(--color-lr-green-700)/<alpha-value>)",
            800: "rgb(var(--color-lr-green-800)/<alpha-value>)",
            900: "rgb(var(--color-lr-green-900)/<alpha-value>)"
          },
          grey: {
            25: "rgb(var(--color-lr-grey-25)/<alpha-value>)",
            50: "rgb(var(--color-lr-grey-50)/<alpha-value>)",
            100: "rgb(var(--color-lr-grey-100)/<alpha-value>)",
            200: "rgb(var(--color-lr-grey-200)/<alpha-value>)",
            300: "rgb(var(--color-lr-grey-300)/<alpha-value>)",
            400: "rgb(var(--color-lr-grey-400)/<alpha-value>)",
            500: "rgb(var(--color-lr-grey-500)/<alpha-value>)",
            600: "rgb(var(--color-lr-grey-600)/<alpha-value>)",
            700: "rgb(var(--color-lr-grey-700)/<alpha-value>)",
            800: "rgb(var(--color-lr-grey-800)/<alpha-value>)",
            900: "rgb(var(--color-lr-grey-900)/<alpha-value>)",
            950: "rgb(var(--color-lr-grey-950)/<alpha-value>)"
          },
          red: {
            50: "rgb(var(--color-lr-red-50)/<alpha-value>)",
            100: "rgb(var(--color-lr-red-100)/<alpha-value>)",
            200: "rgb(var(--color-lr-red-200)/<alpha-value>)",
            300: "rgb(var(--color-lr-red-300)/<alpha-value>)",
            400: "rgb(var(--color-lr-red-400)/<alpha-value>)",
            500: "rgb(var(--color-lr-red-500)/<alpha-value>)",
            600: "rgb(var(--color-lr-red-600)/<alpha-value>)",
            700: "rgb(var(--color-lr-red-700)/<alpha-value>)",
            800: "rgb(var(--color-lr-red-800)/<alpha-value>)",
            900: "rgb(var(--color-lr-red-900)/<alpha-value>)"
          },
          orange: {
            50: "rgb(var(--color-lr-orange-50)/<alpha-value>)",
            100: "rgb(var(--color-lr-orange-100)/<alpha-value>)",
            200: "rgb(var(--color-lr-orange-200)/<alpha-value>)",
            300: "rgb(var(--color-lr-orange-300)/<alpha-value>)",
            400: "rgb(var(--color-lr-orange-400)/<alpha-value>)",
            500: "rgb(var(--color-lr-orange-500)/<alpha-value>)",
            600: "rgb(var(--color-lr-orange-600)/<alpha-value>)",
            700: "rgb(var(--color-lr-orange-700)/<alpha-value>)",
            800: "rgb(var(--color-lr-orange-800)/<alpha-value>)",
            900: "rgb(var(--color-lr-orange-900)/<alpha-value>)"
          },
          blue: {
            25: "rgb(var(--color-lr-blue-25)/<alpha-value>)",
            50: "rgb(var(--color-lr-blue-50)/<alpha-value>)",
            100: "rgb(var(--color-lr-blue-100)/<alpha-value>)",
            200: "rgb(var(--color-lr-blue-200)/<alpha-value>)",
            300: "rgb(var(--color-lr-blue-300)/<alpha-value>)",
            400: "rgb(var(--color-lr-blue-400)/<alpha-value>)",
            500: "rgb(var(--color-lr-blue-500)/<alpha-value>)",
            600: "rgb(var(--color-lr-blue-600)/<alpha-value>)",
            700: "rgb(var(--color-lr-blue-700)/<alpha-value>)",
            800: "rgb(var(--color-lr-blue-800)/<alpha-value>)",
            900: "rgb(var(--color-lr-blue-900)/<alpha-value>)"
          },
          gold: {
            50: "rgb(var(--color-lr-gold-50)/<alpha-value>)",
            100: "rgb(var(--color-lr-gold-100)/<alpha-value>)",
            200: "rgb(var(--color-lr-gold-200)/<alpha-value>)",
            300: "rgb(var(--color-lr-gold-300)/<alpha-value>)",
            400: "rgb(var(--color-lr-gold-400)/<alpha-value>)",
            500: "rgb(var(--color-lr-gold-500)/<alpha-value>)",
            600: "rgb(var(--color-lr-gold-600)/<alpha-value>)",
            700: "rgb(var(--color-lr-gold-700)/<alpha-value>)",
            800: "rgb(var(--color-lr-gold-800)/<alpha-value>)",
            900: "rgb(var(--color-lr-gold-900)/<alpha-value>)"
          }
        },
        header: {
          background: "rgb(var(--color-header-background)/<alpha-value>)"
        }
      },
      fontFamily: {
        heading: undefined,
        body: undefined,
        mono: undefined,
        roboto: ["Roboto", "sans-serif"]
      },
      fontWeight: {
        extrablack: "950"
      },
      boxShadow: {
        "hard-1": "-2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-2": "0px 3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-3": "2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-4": "0px -3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-5": "0px 2px 10px 0px rgba(38, 38, 38, 0.10)",
        "soft-1": "0px 0px 10px rgba(38, 38, 38, 0.1)",
        "soft-2": "0px 0px 20px rgba(38, 38, 38, 0.2)",
        "soft-3": "0px 0px 30px rgba(38, 38, 38, 0.1)",
        "soft-4": "0px 0px 40px rgba(38, 38, 38, 0.1)"
      }
    }
  },

  plugins: [gluestackPlugin]
};
