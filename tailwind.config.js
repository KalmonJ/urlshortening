/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      "menu-in": {
        "0%": {
          opacity: 0,
        },

        "100%": {
          opacity: 1,
        },
      },

      "tanslate-left-input": {
        "0%": {
          opacity: 0,
          transform: "translateX(-400px)",
        },

        "100%": {
          opacity: 1,
          transform: "translateX(0px)",
        },
      },
      "translate-in": {
        "0%": {
          right: "-300px",
          opacity: 0,
        },

        "100%": {
          opacity: 1,
        },
      },

      "translate-in-top": {
        "0%": {
          opacity: 0,
          transform: "translateY(20px)",
        },

        "100%": {
          opacity: 1,
          transform: "translateY(0px)",
        },
      },

      "fade-in": {
        "0%": {
          opacity: 0,
        },

        "100%": {
          opacity: 1,
        },
      },
    },
    extend: {
      backgroundImage: {
        "bg-shorten": "url('/images/bg-shorten-desktop.svg')",
        "bg-boost-mobile": "url('/images/bg-boost-mobile.svg')",
      },
      animation: {
        "translate-in": "translate-in 1s ease-in-out",
        "fade-in": "fade-in 2s ease-in-out",
        "menu-in": "menu-in 2s ease-in-out",
        "tanslate-left-input": "tanslate-left-input 3s ease-in-out",
        "translate-in-top": "translate-in-top 1s ease-linear",
      },
      colors: {
        text: "hsl(257, 7%, 63%)",
        "new-cyan": "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
        gray: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
