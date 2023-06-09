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
        DEFAULT: "var(--container-padding)",
      },
      screens: {
        DEFAULT: "100%",
      },
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
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "var(--black)",
      white: "var(--white)",
      primary: "var(--pink)",
      body: "var(--color-body)",
      "bg-2/10": "var(--color-bg-opacity-20)",
      "bg-5/10": "var(--color-bg-opacity-50)",
      "bg-8/10": "var(--color-bg-opacity-80)",
      "body-tint": "var(--color-body-tint)",
      "gray-50": "var(--gray-50)",
      "gray-100": "var(--gray-100)",
      "gray-300": "var(--gray-300)",
      "gray-400": "var(--gray-400)",
      "gray-700": "var(--gray-700)",
      "gray-900": "var(--gray-900)",
      pink: "var(--pink)",
      error: "var(--color-error)",
    },
    extend: {
      spacing: {
        section: "var(--section-spacing)",
        page: "var(--page-spacing)",
        container: "var(--container-padding)",
      },
      screens: {
        xs: "360px",
        "3xl": "1750px",
        "4xl": "1920px",
      },
      keyframes: {
        "pulse-scale": {
          "50%": {
            transform: "scale(0.98)",
            opacity: 0.8,
          },
        },
      },
      animation: {
        "pulse-scale": "pulse-scale 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      maxWidth: {
        prose: "60ch",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-body)",
            fontSize: "var(--font-size-base)",
            fontWeight: 500,
            lineHeight: 1.6,
            "--tw-prose-counters": "var(--pink)",
            "--tw-prose-bullets": "var(--pink)",
            // "--tw-prose-bold": "currentColor",

            h1: {
              fontSize: "",
              fontWeight: "",
              lineHeight: "",
            },
            h2: {
              fontSize: "",
              fontWeight: "",
            },
            h3: {
              fontSize: "",
              fontWeight: "",
              lineHeight: "",
            },
            h4: {
              fontSize: "",
              fontWeight: "",
              lineHeight: "",
            },
            h5: {
              fontSize: "",
              fontWeight: "",
              lineHeight: "",
            },
            h6: {
              fontSize: "",
              fontWeight: "",
              lineHeight: "",
              marginBottom: "1.25em",
            },

            a: {
              "&:hover": {
                color: "var(--pink)",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
