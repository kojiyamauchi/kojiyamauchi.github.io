/*
  Background Image.
*/

import React, { ReactNode, CSSProperties } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyBackgroundImage, { IFluidObject } from 'gatsby-background-image'
import { BackgroundImageQuery } from 'graphql-types'

type Props = {
  children: ReactNode
  tag: 'main' // TODO: Maybe Can't Dynamically Specify Type with Generics etc.
  className?: string
  style?: CSSProperties
  fileName: string
}

export const BackgroundImage: React.FC<Props> = ({ children, tag, className, style, fileName }): JSX.Element => {
  const { allImageSharp } = useStaticQuery<BackgroundImageQuery>(graphql`
    query BackgroundImage {
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
    <GatsbyBackgroundImage
      Tag={tag}
      className={className}
      style={style}
      /*
        TODO:
        gatsby-background-image <-> gatsby-plugin-graphql-codeine Too Match Type. gatsby-background-image/index.d.ts(41, 5)
        Using gatsby-background-image/index.d.ts
      */
      fluid={allImageSharp.nodes.find((info) => info.fluid?.originalName === fileName)?.fluid as IFluidObject | IFluidObject[] | (IFluidObject | string)[]}
    >
      {children}
    </GatsbyBackgroundImage>
  )
  /* Add Below Code to the Components.
  <BackgroundImage
    tag="add-dom-name"
    className={className}
    fileName="add-filename.png"
  >
    <AddInnerDOM />
  </BackgroundImage>
  */
}
