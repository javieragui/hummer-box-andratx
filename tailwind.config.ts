import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1d7abf",
        secondary: "#003366",
        text: "#FFFFFF",
        accent: "#00A3FF",
        gray: "#B0B0B0",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'], // Montserrat como fuente predeterminada
        raleway: ['var(--font-raleway)', 'sans-serif'], // Raleway como fuente predeterminada
        poppins: ['var(--font-poppins)', 'sans-serif'], // Poppins opcional
      },
    },
  },
  plugins: [],
} satisfies Config;
// theme: {
//   extend: {
//     colors: {
//       primary: "#007BFF",
//       secondary: "#003366",
//       background: "#000000",
//       text: "#FFFFFF",
//       accent: "#00A3FF",
//       gray: "#B0B0B0",
//     },