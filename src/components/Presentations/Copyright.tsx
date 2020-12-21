/*
  Copyright.
*/

import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  parent: 'footer' | 'modal'
}

const CopyrightComponent: React.VFC<Props> = ({ className }): JSX.Element => (
  <a className={className} href="http://kojiyamauchi.com" target="_blank" rel="noreferrer">
    © {new Date().getFullYear()} All The Small Things, All Rights Reserved.
  </a>
)

const StyledComponent = styled(CopyrightComponent)`
  color: ${(props) => (props.parent === `footer` ? `#777` : `#fff`)};
  font-size: 1.5em;
  font-family: Lobster, cursive, 'arial';
  ${(props) => props.parent === 'footer' && `text-shadow: 2px 2px 1px #fff;`}
  cursor: pointer;
  ${BreakPoint.largeMobile` font-size: 2.4em `}
`

export const Copyright = StyledComponent
