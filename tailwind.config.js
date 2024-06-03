/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smxl: "1150px",
        iPad: "951px",
        iPadAir: "841px",
        surfaceDuo: "540px",
        iPhone: "435px",
        smallPhone: "330px",
      },
    },
  },
  plugins: [],
};
