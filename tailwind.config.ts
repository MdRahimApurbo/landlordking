import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e018ff",
          dark: "#e018ff",
          foreground: "#ffffff",
          50: "#fce6ff",
          100: "#f9b3ff",
          200: "#f580ff",
          300: "#f14dff",
          400: "#ed1aff",
          500: "#e018ff",
          600: "#b014cc",
          700: "#801099",
          800: "#500c66",
          900: "#300849",
        },
        secondary: {
          DEFAULT: "#823fff",
          dark: "#823fff",
          foreground: "#ffffff",
          50: "#f0e5ff", // Light variant
          100: "#d9bbff",
          200: "#c493ff",
          300: "#ae69ff",
          400: "#9c40ff",
          500: "#823fff", // Main color
          600: "#6a32cc",
          700: "#532499",
          800: "#3d1973",
          900: "#290f4d",
        },
        accent: {
          DEFAULT: "#f6571e",
          foreground: "#ffffff",
        },
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        text: {
          DEFAULT: "#ffffff",
        },
        shadow: {
          DEFAULT: "rgba(0, 0, 0, 0.1)",
          dark: "rgba(255, 255, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      borderColor: {
        DEFAULT: "#eaeaea",
      },
      ringColor: {
        DEFAULT: "#8c21dd",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
