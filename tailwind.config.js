/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      new: '928px',
      lg: '1024px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "card-highlight": "rgb(var(--card-highlight))",
        "card-foreground": "rgb(var(--card-foreground))",
        "card-background-primary": "rgb(var(--card-background-primary))",
        "card-background-secondary": "rgb(var(--card-background-secondary))",
        'headings': '#fdb714',
        'Achievement-primary': '#0C0C0C',
        'Achievement-heading': '#F1DC90',
        'Achievement-font': '#FFFFFF',
        'Achievement-outline': '#F2613F',
        'Event': '#0C0C0C',
        'Event-heading': '#F1DC90',
        'Event-font': '#FFFFFF',
        'Event-Accordian': '#D9D9D933',
        'Event-outline': '#F2613F',

        'Trialprimary1': '#dd2476',
        'Trialprimary2': '#ff512f',
        'NeonOrange': '#ff5f1f',
        'bglinear':'[linear-gradient(99deg, #dd2476 0%, #dd2476 0%, #ff512f 100%, #ff512f 100%)]',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors:{
//         'headings':'#fdb714',
//         'Achievement-primary' :'#0C0C0C',
//         'Achievement-heading' : '#F1DC90',
//         'Achievement-font' : '#FFFFFF',
//         'Achievement-outline': '#F2613F'
//       }
//       colors: {
//         'headings': '#fdb714',
//         'Event': '#0C0C0C',
//         'Event-heading': '#F1DC90',
//         'Event-font': '#FFFFFF',
//         'Event-Accordian': '#D9D9D933',
//         'Event-outline': '#F2613F'
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }