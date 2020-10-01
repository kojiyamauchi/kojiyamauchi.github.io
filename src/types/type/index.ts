type BreakPoint = 'smallMobile' | 'mobile' | 'largeMobile' | 'tablet' | 'desktop' | 'largeDesktop' | 'extraLargeDesktop'

type BreakPointWidthMember = {
  readonly [P in BreakPoint]: number
}

type BreakPointMember = {
  [P in BreakPoint]: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
}
