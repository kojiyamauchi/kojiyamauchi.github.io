/*
  Secondary Page.
*/

import { SEO } from '@/components/seo'
import { Layout } from '@/components/layout'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
  location: { pathname: string }
}

const SecondaryPageComponent: React.VFC<Props> = ({ location: { pathname } }): JSX.Element => (
  <Layout currentLocation={pathname}>
    <SEO title="せかんだりー" pagePath={pathname} />
    <Link to="/">せかんだりー</Link>
  </Layout>
)

export default styled(SecondaryPageComponent)`
  ${PagesStyle}
`
