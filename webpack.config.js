const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const config = require('./src/config');

const isProd = () => {
  return config.global.env !== 'development';
};

module.exports = {
  target: 'web',
  mode: isProd() ? 'production' : 'development',
  optimization: isProd()
    ? {
        splitChunks: {
          chunks: 'all'
        },
        minimizer: [
          new OptimizeCssAssetsPlugin(),
          new TerserPlugin(),
          new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            minify: {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true
            }
          })
        ]
      }
    : {
        splitChunks: {
          chunks: 'all'
        }
      },
  performance: isProd() && {
    hints: 'warning'
  },
  devtool: !isProd() && 'inline-source-map',
  entry: './src/index.js',
  output: isProd()
    ? {
        path: path.resolve(__dirname, 'build'),
        filename: 'static/js/bundle.[hash].js'
      }
    : {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
      },
  module: {
    rules: isProd()
      ? [
          {
            test: /\.html$/,
            use: {
              loader: 'html-loader'
            }
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/lodash-es')],
            loader: 'babel-loader'
          },
          {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'static/assets/images'
              }
            }
          },
          {
            test: /\.(woff|woff2|otf|eot|ttf)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'static/assets/fonts'
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: { importLoaders: 1 } },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: [require('tailwindcss'), require('autoprefixer')]
                }
              }
            ]
          }
        ]
      : [
          {
            test: /\.html$/,
            use: {
              loader: 'html-loader'
            }
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{ loader: 'babel-loader' }, { loader: 'source-map-loader' }],
            enforce: 'pre'
          },
          {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images'
              }
            }
          },
          {
            test: /\.(woff|woff2|otf|eot|ttf)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts'
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { importLoaders: 1 } },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: [require('tailwindcss'), require('autoprefixer')]
                }
              }
            ]
          }
        ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Actions: path.resolve(__dirname, 'src/redux/actions/'),
      FormFields: path.resolve(__dirname, 'src/packages/FormFields/'),
      Images: path.resolve(__dirname, 'src/assets/images/'),
      Lists: path.resolve(__dirname, 'src/utils/ListUtil/'),
      Packages: path.resolve(__dirname, 'src/packages/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Utils: path.resolve(__dirname, 'src/utils/')
    }
  },
  devServer: {
    contentBase: './public/',
    index: 'index.html',
    port: config.global.port,
    historyApiFallback: true,
    open: true,
    hot: true
  },
  plugins: isProd()
    ? [
        new CleanWebpackPlugin(),
        new CopyPlugin([
          {
            from: 'public/robots.txt',
            to: 'robots.txt',
            toType: 'file'
          }
        ]),
        new MiniCssExtractPlugin({
          filename: 'index.css',
          chunkFilename: 'static/css/[name].[hash].css'
        }),
        new Dotenv({
          path: './.env',
          safe: true,
          systemvars: true,
          silent: true,
          defaults: false
        }),
        new WorkboxWebpackPlugin.InjectManifest({
          swSrc: './src/src-sw.js',
          swDest: 'sw.js'
        })
      ]
    : [
        new HtmlWebpackPlugin({
          template: 'public/index.html'
        }),
        new Dotenv({
          path: './.env',
          safe: true,
          systemvars: true,
          silent: true,
          defaults: false
        }),
        new WorkboxWebpackPlugin.InjectManifest({
          swSrc: './src/src-sw.js',
          swDest: 'sw.js'
        })
      ]
};
