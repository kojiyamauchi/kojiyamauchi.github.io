const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontReset = '\x1b[0m'

const pathPrefix = () => {
  const config = {
    enable: false,
    subDir: '/'
  }
  if (!config.enable) return
  return { basePath: config.subDir, assetPrefix: `${config.subDir}/` }
}

module.exports = {
  webpack5: true,
  webpack: (config, option) => {
    option.isServer && console.info('🏗  Currently Webpack Ver:', `${logFontBold}${logFontColorCyan}${option.webpack.version}${logFontReset}`)

    // When Extend Webpack Rule.
    // config.module.rules.push({})

    option.isServer &&
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: '*.{png,jpg,jpeg,gif}',
              context: path.resolve(__dirname, 'src', 'toWebps'),
              to: path.resolve(__dirname, 'public', 'webps'),
              noErrorOnMissing: true
            },
            {
              from: path.resolve(__dirname, 'src/markdowns/**/*.{png,jpg,jpeg,gif}'),
              to: path.resolve(__dirname, 'public', 'webps', '[name][ext]'),
              noErrorOnMissing: true
            }
          ]
        }),
        new ForkTsChecker({
          typescript: {
            diagnosticOptions: {
              semantic: true,
              syntactic: true
            }
          }
        }),
        new ESLintPlugin({ files: [path.resolve(__dirname, 'src/**/*.{ts,tsx,js,jsx}')], failOnWarning: true }),
        new StylelintPlugin({ files: 'src/**/*.(s(c|a)ss|css)', fix: true }),
        new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript | Next.js' }),
        new WebpackNotifierPlugin({ title: 'ESLint or Webpack Build | Next.js ' }),
        new ImageminWebpWebpackPlugin({
          config: [
            {
              test: /\.(jpe?g|png)$/i,
              options: {
                quality: 60
              }
            }
          ],
          detailedLogs: false,
          silent: false
        })
      )
    return config
  },
  // Pick Up Node Env from Client Side & Pick Up Base Path from Outside the FC.
  env: {
    envMode: process.env.NODE_ENV,
    basePath: pathPrefix() ? pathPrefix().basePath : ''
  },
  ...pathPrefix()
}
