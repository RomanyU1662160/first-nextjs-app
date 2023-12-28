/** @type {import('tailwindcss').Config} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {},
  },
  plugins: [new MiniCssExtractPlugin()],
}

