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
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      border: "#eaeaea",
      input: {
        DEFAULT: "#fdfdfd",
        border: "rgba(15, 15, 15, 0.2)",
        placeholder: "rgba(15, 15, 15, 0.5)",
      },
      ring: "#8c21dd",
      background: "#fdfdfd",
      foreground: "#1a1a1a",
      primary: {
        DEFAULT: "#8c21dd",
        foreground: "#ffffff",
        50: "#eee6fb",
        100: "#cbb2f1",
        200: "#b18deb",
        300: "#8e59e2",
        400: "#7839dc",
        500: "#8c21dd",
        600: "#4e06c0",
        700: "#3d0596",
        800: "#2f0474",
        900: "#240359",
      },
      secondary: {
        DEFAULT: "#1a1a1a",
        foreground: "#ffffff",
        hover: "#171717",
        active: "#151515",
        light: {
          DEFAULT: "#e8e8e8",
          hover: "#dddddd",
          active: "#b8b8b8",
        },
        dark: {
          DEFAULT: "#141414",
          hover: "#101010",
          active: "#0c0c0c",
        },
        darker: "#090909",
      },
      DEFAULT: "#ffffff",
      normal: {
        DEFAULT: "#fdfdfd",
        hover: "#e4e4e4",
        active: "#cacaca",
      },
      dark: {
        DEFAULT: "#bebebe",
        hover: "#989898",
        active: "#727272",
      },
      darker: "#595959",
    },
    muted: {
      DEFAULT: "#727272",
      foreground: "#ffffff",
    },
    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },
    popover: {
      DEFAULT: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))",
    },
    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
