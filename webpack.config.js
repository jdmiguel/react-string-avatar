module.exports = {
  entry: './src/react-string-avatar.js',
  output: {
    filename: './dist/react-string-avatar.min.js'
  },
  module:{
    rules:[

      /*
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      */

      /* SASS LOADERS
      {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS
          ]
      }
      */
     
      /* FILE LOADER
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: "file-loader"
      }*/
    ]
  }
}