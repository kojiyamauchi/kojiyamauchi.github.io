/**
 * @jest-environment jsdom
 */
/*
  Error Page Footer Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { ErrorPageFooterContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Error Page Footer Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<ErrorPageFooterContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
