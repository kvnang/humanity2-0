const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        // xl: "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
      },
      // screens: {
      //   DEFAULT: "100%",
      // },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      md: "var(--font-size-md)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
      "2xl": "var(--font-size-2xl)",
      "3xl": "var(--font-size-3xl)",
    },
    fontFamily: {
      heading: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      sans: ["var(--font-catamaran)", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "var(--black)",
      white: "var(--white)",
      primary: "var(--pink)",
      body: "var(--color-body)",
      "bg-8/10": "var(--color-bg-opacity-80)",
      "body-tint": "var(--color-body-tint)",
      "gray-100": "var(--gray-100)",
      "gray-700": "var(--gray-700)",
      "gray-900": "var(--gray-900)",
      pink: "var(--pink)",
    },
    extend: {
      spacing: {
        section: "var(--section-spacing)",
        page: "var(--page-spacing)",
      },
      screens: {
        "3xl": "1750px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-body)",
            fontSize: "var(--font-size-base)",
            fontWeight: 500,
            "--tw-prose-counters": "var(--pink)",
            "--tw-prose-bullets": "var(--pink)",
            // "--tw-prose-bold": "currentColor",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
