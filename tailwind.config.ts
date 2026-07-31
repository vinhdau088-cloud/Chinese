import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#A78BFA",
        card: "#F8F7FF"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },

  plugins: []
};

export default config;
