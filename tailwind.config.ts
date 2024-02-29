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
        yellow: "#FCE531",
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
      },
      border: {
        primary: "#47A3C4",
        secondary: "#FCE531",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
