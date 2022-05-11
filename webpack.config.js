const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let htmlPageNames = ['base'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    base: './src/js/base.js',
  },
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [{
          // Inject CSS to page
          loader: 'style-loader'
        }, {
          // Translate CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Compile Sass to CSS
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main']
    }),
    new VueLoaderPlugin()
  ].concat(multipleHtmlPlugins)
}
