/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { CHOOSE_CMS } = require('./setup')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|gatsby-browser.js|sync-requires.js)$/,
          loader: 'eslint-loader'
        },
        {
          enforce: 'pre',
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [{ loader: 'stylelint-custom-processor-loader', options: { emitWarning: true } }]
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: []
  })
}

switch (CHOOSE_CMS) {
  case 'markdown': {
    console.log('markdown')

    // Generate File Path from Directory Structure to GraphQL.
    const { createFilePath } = require(`gatsby-source-filesystem`)
    exports.onCreateNode = ({ node, getNode, actions }) => {
      const { createNodeField } = actions
      if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode })
        createNodeField({
          node,
          name: `slug`,
          value: `/blog${slug}`
        })
      }
    }

    // Pickup Categories.(Remove Duplicates)
    const pickupCategories = (arg) => {
      const uniqueCategories = new Set()
      arg.data.allMarkdownRemark.edges.map(({ node }) => {
        node.frontmatter.categories.map((category) => {
          uniqueCategories.add(category)
        })
      })
      return Array.from(uniqueCategories)
    }

    // Create Post Page, List Page & Category Page.
    exports.createPages = async ({ actions, graphql, reporter }) => {
      const { createPage } = actions
      const result = await graphql(`
        {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
            edges {
              next {
                fields {
                  slug
                }
              }
              previous {
                fields {
                  slug
                }
              }
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  categories
                }
              }
            }
          }
        }
      `)
      if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

      // For Post Pages.
      result.data.allMarkdownRemark.edges.map(({ node, next, previous }) => {
        createPage({
          path: node.fields.slug,
          component: require.resolve(`./src/templates/blog-post.tsx`),
          context: {
            /*
               Context data for this page. Passed as props to the component
               this.props.pageContext as well as to the graphql query as graphql arguments.
            */
            id: node.id,
            next: next && next.fields.slug,
            previous: previous && previous.fields.slug
          }
        })
      })

      // For List Pages.
      const postsDisplayedNumber = 3
      const totalPost = result.data.allMarkdownRemark.edges.length
      const totalPages = Math.ceil(totalPost / postsDisplayedNumber)

      Array.from({ length: totalPages }, (_info, index) => {
        createPage({
          path: index === 0 ? `/blog-list/` : `/blog-list/${index + 1}/`,
          component: path.resolve('./src/templates/blog-list.tsx'),
          context: {
            /*
               Context data for this page. Passed as props to the component
               this.props.pageContext as well as to the graphql query as graphql arguments.
            */
            skip: postsDisplayedNumber * index,
            limit: postsDisplayedNumber,
            current: index + 1,
            isFirst: index + 1 === 1,
            isLast: index + 1 === totalPages
          }
        })
      })

      // For Category Pages. (Processing of Each Categories)
      pickupCategories(result).map((category) => {
        const postsDisplayedNumber = 3
        const totalPost = result.data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.categories.includes(category)).filter((truthyArr) => truthyArr)
          .length
        const totalPages = Math.ceil(totalPost / postsDisplayedNumber)

        Array.from({ length: totalPages }, (_info, index) => {
          createPage({
            path: index === 0 ? `/category/${category}/` : `/category/${category}/${index + 1}/`,
            component: path.resolve(`./src/templates/blog-category.tsx`),
            context: {
              /*
               Context data for this page. Passed as props to the component
               this.props.pageContext as well as to the graphql query as graphql arguments.
            */
              category: category,
              ids: result.data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.categories.includes(category)).map(({ node }) => node.id),
              skip: postsDisplayedNumber * index,
              limit: postsDisplayedNumber,
              current: index + 1,
              isFirst: index + 1 === 1,
              isLast: index + 1 === totalPages
            }
          })
        })
      })
    }
    break
  }

  case 'contentful': {
    console.log('contentful')
    exports.createPages = async ({ actions, graphql, reporter }) => {
      const { createPage } = actions
    }
    break
  }

  case 'microcms': {
    console.log('microcms')
    exports.createPages = async ({ actions, graphql, reporter }) => {
      const { createPage } = actions
    }
    break
  }

  case 'wordpress': {
    console.log('wordpress')
    exports.createPages = async ({ actions, graphql, reporter }) => {
      const { createPage } = actions
    }
    break
  }

  case 'none':
    console.log('Do Not Use CMS.')
    break

  default:
    throw new Error('CMS is Not Setup, Please Check setup.js.')
}
