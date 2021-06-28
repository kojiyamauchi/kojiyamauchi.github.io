/*
  Close Button Component Unit Test.
*/

import { CloseButton } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Close Button Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const mockFn = jest.fn()
    const { asFragment } = render(<CloseButton modalState={true} modalClose={mockFn} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
