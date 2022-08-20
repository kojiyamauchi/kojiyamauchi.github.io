/*
  Thanks For Visiting Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { ThanksForVisiting } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Thanks For Visiting Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const mockFn = jest.fn()
    const { asFragment } = render(<ThanksForVisiting copyrightHover={false} openAboutMe={mockFn} />)
    expect(asFragment()).toMatchSnapshot()
  })
})