/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#365486",
        "foreground":"#7FC7D9"
      },
      animation:{
        "spin-slow":"spin 10s linear infinite"
      },
      boxShadow:{
        'custom':'0 0 50px rgb(127, 199, 217), 0 0 10px rgb(15, 16, 53) , 0 0 20px rgb(127, 199, 217) inset'
      }
    },
  },
  plugins: [],
};
