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
      "translate-in": {
        "0%": {
          right: "-300px",
          opacity: 0,
        },

        "100%": {
          opacity: 1,
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
      animation: {
        "translate-in": "translate-in 1s ease-in-out",
        "fade-in": "fade-in 2s ease-in-out",
      },
      colors: {
        text: "hsl(0, 0%, 75%)",
        "new-cyan": "hsl(180, 66%, 49%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
