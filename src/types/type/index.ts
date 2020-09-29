type BreakPointWidthMember = {
  readonly smallMobile: number
  readonly mobile: number
  readonly largeMobile: number
  readonly tablet: number
  readonly desktop: number
  readonly largeDesktop: number
  readonly extraLargeDesktop: number
}

type BreakPointMember = {
  smallMobile: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
  mobile: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
  largeMobile: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
  tablet: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
  desktop: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
  largeDesktop: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
  extraLargeDesktop: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
}
