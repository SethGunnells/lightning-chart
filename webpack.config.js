module.exports = {

  entry: './index.js',

  output: {
    path: __dirname + '/bin',
    filename: 'lightningViewer.js'
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
      }
    ]
  }

};
