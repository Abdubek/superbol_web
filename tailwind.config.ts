import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      bg: {
        primary: "#47A3C4",
        white: "#FFFFFF",
        platinum: "#F8F8F8",
        darkblue: "#023474",
        lightblue: "#47A3C440",
        yellow: "#FCE531",
        red: "#EA4335",
        success: "#34A85326",
        warn: "#FAED88",
        black: "#000000"
      },
      button: {
        primary: "#47A3C4",
        secondary: "#F8F8F8",
      },
      text: {
        primary: "#47A3C4",
        secondary: "#020202",
        platinum: "#F8F8F8",
        darkblue: "#023474",
        yellow: "#FCE531",
        grey: "#7E7E7E",
        white: "#FFFFFF",
        red: "#EA4335",
      },
      border: {
        primary: "#47A3C4",
        secondary: "#FCE531",
        grey: "#7E7E7E",
        lightgray: "#EAEAEA",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      padding: {
        15: "60px"
      },
      borderRadius: {
        '3xl': '20px'
      },
      gap: {
        15: "60px"
      }
    },
  },
  plugins: [],
};
export default config;
