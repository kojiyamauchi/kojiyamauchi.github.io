/**
 * @jest-environment jsdom
 */
/*
  About Me Component Unit Test.
*/

import { AboutMe } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('About Me Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const mockFn = jest.fn()
    const { asFragment } = render(<AboutMe closeAboutMe={mockFn} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
