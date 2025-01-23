import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react"

export default {
  darkMode: "class",
  content: [
    "./src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require("tailwindcss-animate"),
    heroui({
      themes: {
        light: {
          colors: {
            primary: "red",
            secondary: "orange",
          }, // colors
        },
        dark: {
          colors: {
            primary: "red",
            secondary: "orange",
          }, // dark theme colors
        },
      },
    }),
  ],
} satisfies Config;
