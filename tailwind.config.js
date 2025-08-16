export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: '#2F4156',
        teal: '#567C8D', 
        skyblue: '#C8D9E6',
        beige: '#F5EFEB',
        orange: {
          500: '#567C8D',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
}