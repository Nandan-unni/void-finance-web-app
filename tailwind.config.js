/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/interface/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        black: "#1a1a1a",
        white: "#f9f9f9",
        themeColor: "#fcd535",
      },
    },
  },
  plugins: [],
};
