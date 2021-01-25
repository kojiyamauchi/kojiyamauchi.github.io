/*
  Sub Letter.
*/

import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  visited: boolean
}

const SubLetterComponent: React.VFC<Props> = ({ className }): JSX.Element => (
  <p className={`${className} sub-letter`}>Logo 3D Models / kojiyamauchi.github.io</p>
)

const introductionCssProperties = `
visibility: hidden;
opacity: 0;
transform: translateX(-30px);
transition: all 0.75s ease-out;
will-change: visibility, opacity, transform;
`

const StyledComponent = styled(SubLetterComponent)`
  display: block;
  font-size: 1.6em;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  text-shadow: 2px 2px 1px #fff;
  ${(props): string | false => !props.visited && introductionCssProperties}
  ${BreakPoint.largeMobile` font-size: 2.4em; `}
  ${BreakPoint.largeMobile`  text-align: right;`}

  &.is-active {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    transition: all 0.75s ease-out;
  }
`

export const SubLetter = StyledComponent
