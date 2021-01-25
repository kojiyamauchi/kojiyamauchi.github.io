export type ValueOf<T> = T[keyof T]

export type BreakPoint = 'smallMobile' | 'mobile' | 'largeMobile' | 'tablet' | 'desktop' | 'largeDesktop' | 'extraLargeDesktop'

export type BreakPointWidthMember = {
  readonly [P in BreakPoint]: number
}

export type BreakPointMember = {
  [P in BreakPoint]: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
}
