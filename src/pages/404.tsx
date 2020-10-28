/*
  404.
*/

import { Layout } from '@/components/layout'
import { SEO } from '@/components/seo'
import styled from 'styled-components'
import { PagesStyle, BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  location: { pathname: string }
}

const NotFoundPageComponent: React.FC<Props> = ({ className, location: { pathname } }): JSX.Element => (
  <Layout currentLocation={pathname}>
    <SEO title="404: Not found" pagePath={pathname} />
    <main className={className}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
)

export default styled(NotFoundPageComponent)`
  ${PagesStyle}

  h1 {
    font-size: 3em;
    transform: translateY(-100%);
    ${BreakPoint.largeMobile` font-size: 4.8em `}
  }

  p {
    font-size: 2em;
    text-align: center;
    transform: translateY(-50%);
    ${BreakPoint.largeMobile` font-size: 3em `}
    ${BreakPoint.largeMobile` transform: translateY(-100%) `}
  }
`
