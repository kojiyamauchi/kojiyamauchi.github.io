/*
  Mixins for Style.
*/

import { css } from 'styled-components'
import { BREAK_POINT_WIDTH } from '@/styles/StyleConstants'
import { BreakPointWidthMember, BreakPointMember } from '@/types/type'

// Break Point.
/*
Usage.
Small Mobile.  => ${BreakPoint.smallMobile` Add CSS Property `}
Mobile.        => ${BreakPoint.mobile` Add CSS Property `}
Large Mobile.  => ${BreakPoint.largeMobile` Add CSS Property `}
Tablet.        => ${BreakPoint.tablet` Add CSS Property `}
Desktop.       => ${BreakPoint.desktop` Add CSS Property `}
Large Desktop. => ${BreakPoint.largeDesktop` Add CSS Property `}
Extra Large Desktop. => ${BreakPoint.extraLargeDesktop` Add CSS Property `}
*/
export const BreakPoint = Object.keys(BREAK_POINT_WIDTH).reduce((accumulator, current): BreakPointMember => {
  const breakPointKey = current as keyof BreakPointWidthMember
  accumulator[breakPointKey] = (args: TemplateStringsArray): import('styled-components').FlattenSimpleInterpolation => css`
    @media (min-width: ${BREAK_POINT_WIDTH[breakPointKey]}px) {
      ${css(args)};
    }
  `
  return accumulator
}, {} as BreakPointMember)

// Pages Mixins.
export const PagesStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
`

// Pages Heading Mixins.
export const PagesHeading = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3em;
    transform: translateY(-100%);
    ${BreakPoint.largeMobile` font-size: 4.8em `}
  }
`

// Flex Center. (Utilities)
export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

// Flex Horizontal Space Between. (Utilities)
export const FlexHorizontalBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// Flex Horizontal Flex Start. (Utilities)
export const FlexHorizontalStart = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

// Flex Horizontal Flex End. (Utilities)
export const FlexHorizontalEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
