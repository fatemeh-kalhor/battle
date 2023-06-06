/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./*.html"],
  
  theme: {
    extend: {

      fontSize: {
        "size-20": "20px"
      },
      width: {
        "calc": "calc(100% - 50px)"
      },
      height: {
        "calc":"calc(100vh - 95px)"
      },
      colors:{
        'dark': '#23252B',
        'back-page':'#15171E',
        'back-buy':'#6cdb00'
      },

      backgroundImage: {
  'download':"url('/image/image/background.webp')"
}
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "light",
      "aqua",
      "synthwave",
      "pastel",
      "acid",
      "emerald"
    ],

    light: {
      ...require("daisyui/src/colors/themes")["[data-theme=light]"],
      'div.menu': {
        'background-color': '#740200',
        'border-color': '#1EA1F1',
      },
      'div.theme_site': {
        'background-color': '#740200',
        
      },
    },


    

  },
  plugins: [require("daisyui")],
};