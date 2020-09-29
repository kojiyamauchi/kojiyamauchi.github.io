/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { SeoQuery } from 'graphql-types'

type Props = {
  lang?: string
  meta?: { name: string; content: string; property?: undefined }[]
  title?: string
  description?: string
  pagePath?: string
}

export const SEO: React.FC<Props> = ({ lang = 'ja', meta = [], ...props }): JSX.Element => {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `
  )

  const metaDescription = props.description || site?.siteMetadata?.description || undefined
  const url = props.pagePath ? `${site?.siteMetadata?.siteUrl}${props.pagePath}` || undefined : site?.siteMetadata?.siteUrl || undefined

  return (
    <Helmet
      htmlAttributes={{ lang }}
      defaultTitle={`${site?.siteMetadata?.title}`}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      title={props.title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: props.title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author || undefined
        },
        {
          name: `twitter:title`,
          content: props.title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta!)}
    >
      <link rel="canonical" href={url} />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
