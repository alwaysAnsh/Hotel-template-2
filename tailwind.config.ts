import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          sand: "#D6A45D",
          gold: "#C88A2B",
          amber: "#E3B46F",
          muted: "#A67C3D",
        },
        heritage: {
          brown: "#3A2418",
          deep: "#23150E",
          earth: "#523524",
        },
        night: {
          blue: "#101827",
          deep: "#090E17",
          twilight: "#1B263B",
        },
        ivory: {
          warm: "#F7F1E5",
          soft: "#EFE6D5",
          cream: "#FAF6EE",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        cinematic: "0.24em",
        editorial: "0.14em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
        luxury: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
