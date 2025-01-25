/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html", ],
  theme: {
    extend: {
      colors:{
        "blue-primary": "#1600cc",
        "blue-opacity": "rgb(22,0,204,.8)",
        "blue-dark":    "#0D0081",
        "blue-light":    "#1800F0",
        black:           "#3C3B46",
        blackRgba:           "rgba(60, 59, 70, 0.7)",
        white:           "#ffffff"

      },
      fontFamily: {
        "poppins-regular": "'Poppins-Regular', sans-serif",
        "poppins-bold": "'Poppins-Bold', sans-serif", 
      },
      fontSize:{
        titlepw: "3rem",
        title: "2rem",
        titlered: "1.5rem",
        paragraph: "1rem",
        paragraphlw: ".8rem",
        
      },
      
      maxWidth:{
        w1440: "1440px",
        w300:  "300px",
        w500:   "500px",
       
      },
      margin:{
        mauto: "0 auto",
      },

      padding:{
        x16: "0px 16px"
      },
      boxShadow: {
        'bottom-blue': '0 1px 8px rgba(22, 0, 204, 0.4)',
        'left-blue': '0 0px 4px rgba(22, 0, 204, 0.4)',
      },

      backgroundPosition:{
        "cem%": "50% 50%",
        "quarenta%": "40% 50%"
      },

      screens:{
        "min300": "300px",
        "min750": "750px",
        "min600":  "600px",
        "min650": "650px",
        "min900":  "900px",
        "min1000": "1000px",
      },
    },
  },
  plugins: [],
}
