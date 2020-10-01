/*
  Link GitHub.
*/

import React from 'react'
import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'
import { Link } from 'gatsby'

type Props = {
  className?: string
}

const LinkGitHubComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <Link className={`${className} link-github`} to="/secondary-page">
    <svg
      version="1.1"
      className="icon_github"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      enableBackground="new 0 0 500 500"
      xmlSpace="preserve"
    >
      <g>
        <path
          className="path"
          d="M426.3,379.1c4-0.3,8.7,0.4,13.9,2.4c5.2,1.9,10.7,5.7,16.2,11.2l32.2,32.7c1.7,1.7,3.8,2.6,6.3,2.6
		c1.2,0,2.3-0.3,3.5-1l1.7-1.7V275.7H500V0L0,500h500v-73.1L427.9,499h-0.1l72.1-72.1v-1c-0.6,0.5-1.1,1-1.7,1.3l-68.9,67.7
		c-0.8,1.3-2.1,2.5-3.8,3.7l3.8-3.7c0.8-1.3,1.3-2.6,1.3-3.8c0-2.5-0.9-4.6-2.6-6.3L406,463c-9.7,14.3-19.5,23.1-29.4,26.4
		c-9.9,3.2-18.1,3.4-25,0.4c-4.5-2-9.2-3.5-14.1-4.6c-4.9-1.1-10.5-0.9-16.7,0.4s-9.6,1-10.1-1c-0.5-1.9,0.8-4.2,4.1-6.9
		c3.8-3.1,8.1-5.4,13.2-6.7c5-1.3,10.9-1.2,17.5,0.4c13.6,2.7,24,0.7,31.2-5.8s11.7-13,13.6-19.1c-3.2-4.5-5.4-8.7-6.6-12.7
		s-1.6-7.6-1.3-10.7c-14.8,13-31.7,21-50.6,23.8c-18.9,3-39.6-6.2-62.2-27.5c-6.5-6.5-11.2-13.4-14.3-20.9
		c-3.1-7.5-4.7-15.1-4.8-23.1c-2.5-0.6-6.8-3.3-12.9-8.2c-6.2-4.9-11.9-13-17.2-24.2c-0.4-0.4,2.3-3,8.3-7.6c6-4.6,18.3-9,36.9-13.2
		c7.2-12.4,16-23.8,26.2-34s21.5-18.9,33.8-26c4.2-18.6,8.6-30.9,13.2-36.9c4.6-6,7.2-8.8,7.6-8.3c11.2,5.3,19.3,11.1,24.2,17.2
		s7.7,10.5,8.2,12.9c8.1,0.3,15.8,1.9,23.3,5c7.5,3.1,14.3,7.8,20.7,14.1c21.5,22.6,30.8,43.4,27.6,62.3
		C447.3,347.4,439.2,364.3,426.3,379.1z"
        />
      </g>
    </svg>
  </Link>
)

const StyledComponent = styled(LinkGitHubComponent)`
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  ${BreakPoint.largeMobile` width: 100px; `}
  ${BreakPoint.largeMobile` height: 100px; `}

  &:hover {
    opacity: 1;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 55px 55px;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.75;
    ${BreakPoint.largeMobile` border-width: 0 0 100px 100px; `}
  }

  .path {
    fill: #fc0e49;
  }
`

export const LinkGitHub = StyledComponent
