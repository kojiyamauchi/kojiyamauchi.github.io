/*
  Image
*/

import React, { CSSProperties } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { ImageQuery } from 'graphql-types'

type Props = {
  className?: string
  style?: CSSProperties
  alt: string
  fileName: string
}

export const Image: React.FC<Props> = ({ className, style, alt, fileName }): JSX.Element => {
  const { allImageSharp } = useStaticQuery<ImageQuery>(graphql`
    query Image {
      allImageSharp {
        nodes {
          fluid(quality: 90, maxWidth: 1920) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <GatsbyImage
      className={className}
      style={style}
      alt={alt}
      /*
        TODO:
        gatsby-image <-> gatsby-plugin-graphql-codeine Too Match Type. gatsby-image/index.d.ts(31, 3)
        Using gatsby-image/index.d.ts
      */
      fluid={allImageSharp.nodes.find((info) => info.fluid?.originalName === fileName)?.fluid as FluidObject | FluidObject[]}
    />
  )
  /* Add Below Code to the Components.
  <Image
    className="img-logo"
    alt="ろご"
    style={{ width: '300px', height: '200px', display: 'block' }} // Optional.
    fileName="add-filename.png"
  /> */
}
