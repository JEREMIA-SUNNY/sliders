module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "4rem",
    },
    extend: {
      
     
    },
    fontFamily: {
      bah: ["Gadugi"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
