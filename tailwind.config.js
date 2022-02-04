/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| ...
|
*/

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        apple: '#A3DE83',
        banana: '#F7F39A',
        'editor-dot': '#D5EDED',
        grape: '#343352',
        pitahaya: '#FFBCD1',
        'purple-gray': '#767594',
        strawberry: '#FF5677',
      },
    },
  },
  plugins: [],
}
