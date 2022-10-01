/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gpt-bg":"#040C18",
        "blackk":"#000000",
        "blur2":"#C1F5FF",
        "blur":"#edd0ff",
        "yellow":"#F5C32C",
        "orange" :"#FCA61F",
        "black" :"#242D49",
        "gray" :"#788097",
        "blueCard" :"#DDF8FE",
        "orangeCard":"rgba(252, 166, 31, 0.45)",
      },
      keyframes:{
        wave:{
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        spin: {
          to:{
            transform: 'rotate(-360deg)'
          }
        }
      },
      animation:{
        'waving-hand': 'wave 2s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
        'ping-slow': 'ping 5s cubic-bezier(1, 1, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
