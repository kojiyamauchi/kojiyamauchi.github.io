/*
  Typography Container Component Unit Test.
*/

import { TypographyContainer } from './Component'
import { Typography } from '@/components/Presentations/Typography'
import { render, act /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

/* eslint-disable @typescript-eslint/no-explicit-any */
// jsdom does not have a type definition for SVGPathElement.🔍
class SVGPathElement extends HTMLElement {}
;(global as any).SVGPathElement = SVGPathElement
/* eslint-enable */

describe('Typography Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    act(() => {
      render(<Typography visited={true} />)
      const { asFragment } = render(<TypographyContainer visited={true} />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
