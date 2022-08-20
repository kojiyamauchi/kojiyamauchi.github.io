/**
 * @jest-environment jsdom
 */
/*
  Close Button Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { CloseButton } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Close Button Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const mockFn = jest.fn()
    const { asFragment } = render(<CloseButton modalState={true} modalClose={mockFn} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
