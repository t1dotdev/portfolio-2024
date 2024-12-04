import { type Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#905aff",
              foreground: "#000",
            },
            secondary: {
              DEFAULT: "#F8F8F8",
              foreground: "#000",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#905aff",
              foreground: "#fff",
            },
            secondary: {
              DEFAULT: "#1F1F22",
              foreground: "#fff",
            },
          }, // light theme colors
        },
      },
    }),
  ],
} satisfies Config;
