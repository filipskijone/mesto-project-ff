const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    // cssnano при подключении нужно передать объект опц
    cssnano({ preset: 'default' })
  ]
};