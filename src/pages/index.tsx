/*
  Top Page.
*/

import React, { useEffect } from 'react'
import { SEO } from '@/components/seo'
import { Layout } from '@/components/layout'
import { TypographyContainer } from '@/components/Managements/TypographyContainer'
import { LogoModel } from '@/components/Presentations/LogoModel'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'

let isVisited = false

type Props = {
  className?: string
  location: { pathname: string }
}

const TopPageComponent: React.FC<Props> = ({ className, location: { pathname } }): JSX.Element => {
  useEffect(() => {
    isVisited = true
    return () => {}
  })

  return (
    <Layout currentLocation={pathname}>
      <SEO title="Re: All The Small Things," pagePath={pathname} />
      <main className={className}>
        <TypographyContainer visited={isVisited} />
        <LogoModel visited={isVisited} />
      </main>
    </Layout>
  )
}

export default styled(TopPageComponent)`
  ${PagesStyle}
`
