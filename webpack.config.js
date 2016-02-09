var path = require('path');

module.exports = {

  entry: './src/components/Chart.jsx',

  output: {
    path: __dirname + '/build',
    filename: 'LightningViewer.js',
    library: 'LightningViewer',
    libraryTarget: 'umd'
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    }
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bin)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },

      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }

};
