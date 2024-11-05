import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: {
          DEFAULT: "#ede7de",
          text: "#254441",
        },
        backdrop: {
          DEFAULT: "#f4f3f0cc",
        },
        mint: {
          DEFAULT: "#a3dcd4",
        },
        rust: {
          DEFAULT: "#e8b89c",
        },
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(.175,.885,.32,1.275)",
      },
    },
  },
  plugins: [],
};
export default config;
