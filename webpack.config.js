const path = require('path');

module.exports = {
  mode: 'development',
  entry: './bin/www',
  output: {
    path: path.resolve(__dirname, 'webpack_result'),
    filename: 'bundle.js'
  },
  node : {
    fs : 'empty',
    net : 'empty',
  },
};
