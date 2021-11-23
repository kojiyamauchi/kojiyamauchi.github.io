const webpack = require('webpack')
const path = require('path')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const pickComponentsDir = path.resolve(__dirname, '../src/components/')
const { basePath } = require('../next.config')

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-essentials'],
  // Use webpack5.
  core: {
    builder: 'webpack5'
  },
  // TypeScript config.
  typescript: {
    check: true,
    checkOptions: {
      typescript: {
        enabled: true,
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        }
      },
      // Below API's used for alerting on the terminal, When using Storybook.
      // It may be removed in the future. | See -> https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/601
      eslint: {
        enabled: true,
        files: [`${pickComponentsDir}/**/*.stories.tsx`]
      }
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  },
  // Extend webpack config.
  webpackFinal: async (config, { configType }) => {
    const webpackEnvMode = configType.toLowerCase()
    // Branches path prefix on production.
    const branchesBasePath = () => {
      if (webpackEnvMode === 'production') {
        return !!basePath ? `${basePath}/storybook/` : '/storybook/'
      } else {
        return ''
      }
    }
    config.output.publicPath = branchesBasePath()

    // Don’t watched other than the storybook files.
    config.watchOptions.ignored = /^(?!.*\.(stories|story))(?=.*\.(js|ts|tsx|jsx)$).*$|node_modules/
    // Modify default image rules.
    config.module.rules = config.module.rules.map((rule) => {
      if (!rule.test.toString().includes('svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf')) return rule
      return { ...rule, test: /\.(jpeg|apng|cur|ani|pdf)(\?.*)?$/ }
    })
    // Extend modules rules.
    ;(config.module.rules = [
      ...config.module.rules,
      // For SCSS.
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader'
        ]
      },
      // For Images.
      {
        test: /\.(webp|jpg|png|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'static/media/images/[hash][ext][query]'
        }
      },
      // For Icon.
      {
        test: /\.ico$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'static/media/icons/[hash][ext][query]'
        }
      },
      // For Fonts.
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'static/media/fonts/[hash][ext][query]'
        }
      }
    ]),
      // Extend resolve alias.
      (config.resolve.alias['@'] = path.resolve(__dirname, '../src/')),
      (config.resolve.alias['~'] = path.resolve(__dirname, '../')),
      // Extend plugins.
      (config.plugins = [
        // Bug, "DefinePlugin Conflicting values for 'process.env'" will occur. See -> https://github.com/storybookjs/storybook/issues/14257
        ...config.plugins.filter((plugin) => plugin.definitions).filter((definePlugin) => definePlugin.definitions['process.env'] !== '{}'),
        ...config.plugins.filter((plugin) => !plugin.definitions),
        new webpack.DefinePlugin({
          webpackEnvMode: JSON.stringify(webpackEnvMode)
        }),
        new ESLintPlugin({
          files: [`${pickComponentsDir}/**/*.stories.tsx`],
          failOnWarning: true
        }),
        new WebpackNotifierPlugin({ title: 'ESLint or Webpack Build | Storybook' }),
        new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript | Storybook' })
      ])

    return config
  },
  // Extend babel config.
  babel: async (options) => ({
    // When extending babel config, Write it here.
    // Currently, below error occurs during the build process.
    // "Though the "loose" option was set to "false" in your @babel/preset-env config,"
    // If adapt this setting, It may affect the react code.
    // For that, It’s pending. | See -> https://github.com/babel/babel/issues/11622
    ...options
  })
}
