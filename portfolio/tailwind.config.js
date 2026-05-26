/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDC435",
        dark: "#25282B",
        muted: "#828282",
        surface: "#F9FAFF",
        white: "#FFFFFF",
        muted_dark: "#838383",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(37, 40, 43, 0.08)",
      },
    },
  },
  plugins: [],
};
