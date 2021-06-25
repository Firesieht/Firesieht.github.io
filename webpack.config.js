const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'bundle'),
  },
  watch: true,
  mode: 'development'
};