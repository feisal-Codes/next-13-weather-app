/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    colors: {
      'secondary-silver':'#F0F5FF',
      'secondary-white':"#fffefe",
      'secondary-grey':"#f5f8ff",
      'text-blue':"#b3ccff",
      'card-blue':"#6A9BFF",
      'card-blue-light':"#94B7FF",
      'card-yellow':"#FFB25A"
    }
    },
  },
  plugins: [],
}
