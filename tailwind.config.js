const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./public/**/*.html", "./src/**/*.vue"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          colors: {
            'light-blue': colors.lightBlue,
            cyan: colors.cyan,
          },
        },
        theme: {
          screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },
        }
        // textColor: {
        //     error: "#f57f6c",
        //     words: "#737373",
        //     success: "#41B883"
        // }
        // textColor: {
        //     transparent: "transparent",
        //     current: "currentColor",
        //     black: colors.black,
        //     white: colors.white,
        //     gray: colors.coolGray,
        //     red: colors.red,
        //     yellow: colors.amber,
        //     blue: colors.blue,
        //     error: "#f57f6c",
        //     words: "#737373",
        //     success: "#41B883"
        // }
    },
    variants: {
      display:['group-hover']
    },
    plugins: []
};
