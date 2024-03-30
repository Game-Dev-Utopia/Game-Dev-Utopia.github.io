/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors:{
                'headings':'#fdb714',
                'Event' :'#0C0C0C',
                'Event-heading' : '#F1DC90',
                'Event-font' : '#FFFFFF',
                'Event-Accordian': '#D9D9D933',
                'Event-outline': '#F2613F'
            },
        },
    },
    plugins: [],
}
