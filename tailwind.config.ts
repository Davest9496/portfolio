import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // This works with our body.dark class
  theme: {
    extend: {
      colors: {
        // Using closest Tailwind colors to match your custom colors
        primary: "#190334", // Close to indigo-950
        secondary: "#210840", // Close to purple-950
        highlight: "#1DCC4F", // Close to green-500
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #190334, #210840)",
      },
      screens: {
        xs: "425px", // Small mobile
        sm: "640px", // Large mobile
        md: "768px", // Tablet
        lg: "1024px", // Desktop
        xl: "1280px", // Large desktop
        "2xl": "1536px", // Extra large desktop
      },
      // You can also define custom text colors that match your CSS variables
      textColor: {
        dark: "var(--foreground-dark)",
        light: "var(--foreground-light)",
      },
      backgroundColor: {
        dark: "var(--background-dark)",
        light: "var(--background-light)",
      },
    },
  },
  plugins: [],
};

export default config;
