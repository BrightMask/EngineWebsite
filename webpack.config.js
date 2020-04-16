const path = require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    entry: {
        app:'./src/index.js',
        login: './src/login.js',
        admin: './src/admin.js'
    },                           // 入口文件
    output: {                                             // webpack打包后出口文件
        filename: '[name].bundle.js',                             // 打包后js文件名称
        path: path.resolve(__dirname, 'dist'),    // 打包后自动输出目录
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            }
        ]
      },
      optimization: {
          splitChunks: {
              cacheGroups: {
                  commons: {
                      chunks: 'initial',
                      minChunks: 2,
                      maxInitialRequests: 5, // The default limit is too small to showcase the effect
                      minSize: 0, // This is example is too small to create commons chunks
                      name: 'common'
                  }
              }
          }
      },
      plugins: [
          // new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
              inject: true,
              filename: 'index.html',
              chunks: ['app', 'common'],
              template: './index.html' ,   // 模板文件位置
          }),
          new HtmlWebpackPlugin({
              inject: true,
              filename: 'login.html',
              chunks: ['login', 'common'],
              template: './login.html',    // 模板文件位置
          }),
          new HtmlWebpackPlugin({
            inject: true,
            filename: 'admin.html',
            chunks: ['admin', 'common'],
            template: './admin.html',    // 模板文件位置
        }),
          // hot 检测文件改动替换plugin
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin(),
      ],
    // webpack-dev-server 配置
    devServer: {
        contentBase: './dist',
        hot: true
    },
}
