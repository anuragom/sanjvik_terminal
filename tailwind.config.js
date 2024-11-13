

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // adjust this if you have different file types
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // adjust this if you have different file types
//   ],
//   theme: {
//     extend: {
//       animation: {
//         move: 'move 2s ease-in-out infinite alternate',
//       },
//       keyframes: {
//         move: {
//           '0%': { transform: 'translateY(0)' },
//           '100%': { transform: 'translateY(20px)' },
//         },
//       },
//       colors: {
//         'dark-orange': '#FF8C00', // adjust the color as per your design
//       },
//       fontSize: {
//         'fs-2': '1.5rem', // add other font sizes if needed
//         'fs-9': '1.125rem',
//       },
//       fontWeight: {
//         'fw-700': '700', // add other font weights if needed
//         'fw-500': '500',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust this if you have different file types
  ],
  theme: {
    extend: {
      // Custom animations and keyframes
      animation: {
        move: 'move 2s ease-in-out infinite alternate',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' },
        },
      },
      
      // Custom colors from your CSS
      colors: {
        'green-blue-crayola': 'hsl(202, 75%, 47%)',
        'prussian-blue': 'hsl(202, 72%, 15%)',
        'eerie-black': 'hsl(210, 11%, 15%)',
        'dark-orange': '#FF8C00', // Converted to hex
        'alice-blue': 'hsl(203, 100%, 97%)',
        'light-gray': 'hsl(0, 0%, 80%)',
        'indigo-dye': 'hsl(202, 64%, 26%)',
        'cultured-1': 'hsl(0, 0%, 94%)',
        'cultured-2': 'hsl(0, 0%, 95%)',
        'platinum': 'hsl(0, 0%, 91%)',
        'black-60': 'hsla(0, 0%, 0%, 0.6)',
        'white': '#FFFFFF',
        'onyx': 'hsl(0, 0%, 24%)',
      },
      
      // Custom font family
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },

      // Custom font sizes
      fontSize: {
        'fs-1': '6rem',
        'fs-2': '5rem',
        'fs-3': '4rem',
        'fs-4': '3rem',
        'fs-5': '2.2rem',
        'fs-6': '2rem',
        'fs-7': '1.8rem',
        'fs-8': '1.5rem',
        'fs-9': '1.125rem', // Equivalent to 1.125rem = 18px
        'fs-10': '1.2rem',
      },

      // Custom font weights
      fontWeight: {
        'fw-500': '500',
        'fw-600': '600',
        'fw-700': '700',
        'fw-800': '800',
      },

      // Custom spacing values
      spacing: {
        'section-padding': '50px',
      },

      // Custom box shadows
      boxShadow: {
        'shadow-1': '2px 0 50px hsla(0, 0%, 0%, 0.2)',
        'shadow-2': '0px 40px 60px hsla(202, 75%, 47%, 0.7)',
        'shadow-3': '0px 0px 60px hsla(202, 75%, 47%, 0.5)',
      },

      // Custom transition timing functions
      transitionTimingFunction: {
        'cubic-in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-out': 'cubic-bezier(0.33, 0.85, 0.4, 0.96)',
      },
    },
  },
  plugins: [],
}
