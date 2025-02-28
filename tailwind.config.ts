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
        primary: "#190334",
        secondary: "#210840",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #190334, #210840)",
      },
      screens: {
        xs: "375px", // Small mobile
        sm: "640px", // Large mobile
        md: "768px", // Tablet
        lg: "1024px", // Desktop
        xl: "1280px", // Large desktop
        "2xl": "1536px", // Extra large desktop
      },
    },
  },
  plugins: [],
};

export default config;
