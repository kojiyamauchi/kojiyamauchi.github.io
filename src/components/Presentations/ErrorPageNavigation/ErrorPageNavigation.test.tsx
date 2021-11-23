/**
 * @jest-environment jsdom
 */
/*
  Error Page Navigation Component Unit Test.
*/

import { ErrorPageNavigation } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Error Page Navigation Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<ErrorPageNavigation />)
    expect(asFragment()).toMatchSnapshot()
  })
})
