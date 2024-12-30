/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '300px',
      md: '640px',
      lg: '1250px',
      xl: '1540px',
    },
    extend: {
      colors: {
        background: "#151515",
        loaderBackground: "#0B0B0B",
      },
      fontFamily: {
        plainLight: ["var(--font-plain-light)"],
        silkSerif: ["var(--font-silk-serif)"],
      },
    },
  },
  plugins: [],
};
