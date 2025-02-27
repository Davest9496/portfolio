/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#210840",
          darker: "#190334",
        },
        accent: "#20F55E",
        "off-white": "#F5F5F5",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
