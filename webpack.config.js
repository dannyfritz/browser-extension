
module.exports = {
  entry: {
    app: './lib/app',
  },
  output: {
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
