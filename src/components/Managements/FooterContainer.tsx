/*
  Footer Container.
*/

import { Copyright } from '@/components/Presentations/Copyright'
import styled from 'styled-components'
import { FlexCenter } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const FooterContainerComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <Copyright parent="footer" />
  </div>
)

const StyledComponent = styled(FooterContainerComponent)`
  ${FlexCenter};
  width: 100%;
  margin: 0 0 20px 0;
`

export const FooterContainer = StyledComponent
