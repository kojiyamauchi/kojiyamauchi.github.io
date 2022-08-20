const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const Open = require('open')
const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontReset = '\x1b[0m'

const pathPrefix = ''
process.env.npm_package_config_path_prefix = pathPrefix
const configPathPrefix = () => {
  if (!!process.env.npm_package_config_path_prefix) {
    return {
      basePath: `/${process.env.npm_package_config_path_prefix}`,
      assetPrefix: `/${process.env.npm_package_config_path_prefix}/`
    }
  }
  return false
}

module.exports = {
  webpack: (config, option) => {
    // option are { buildId, dev, isServer, defaultLoaders, webpack }
    const { isServer, webpack } = option
    // option are { module, plugins, etc... }
    const { plugins } = config

    // When Extend Webpack Rule.
    // module.rules.push({})

    isServer &&
      plugins.push(
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
        new ESLintPlugin({
          files: [path.resolve(__dirname, 'src/**/**/*.{ts,tsx,js,jsx}')],
          failOnWarning: true
        }),
        new StylelintPlugin({
          files: 'src/**/**/*.(s(c|a)ss|css)',
          fix: true
        }),
        new ForkTsCheckerNotifierWebpackPlugin({
          title: 'Next.js | TypeScript'
        }),
        new WebpackNotifierPlugin({
          title: (params) => {
            const status = `${params.status.charAt(0).toUpperCase()}${params.status.slice(1)}`
            if (params.message.includes('eslint')) {
              return `🧐 Next.js | ESLint - ${status}`
            } else if (params.message.includes('stylelint')) {
              return `🧐 Next.js | Stylelint - ${status}`
            } else {
              return `🏗 Next.js | Webpack Build - ${status}`
            }
          }
        }), // Real Text -> ESLint or Stylelint or Webpack Build | Next.js
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

    if (!isServer && process.env.NODE_ENV !== 'production') {
      console.info('🏗  Currently Webpack Ver:', `${logFontBold}${logFontColorCyan}${webpack.version}${logFontReset}`)
      Open(`http://localhost:3000/${process.env.npm_package_config_path_prefix}`, { app: { name: 'Google Chrome Canary' } })
    }

    return config
  },
  // Pick Up Node Env from Client Side & Pick Up Base Path from Outside the FC.
  env: {
    envMode: process.env.NODE_ENV,
    basePath: !!configPathPrefix() ? configPathPrefix().basePath : ''
  },

  ...configPathPrefix()
}
