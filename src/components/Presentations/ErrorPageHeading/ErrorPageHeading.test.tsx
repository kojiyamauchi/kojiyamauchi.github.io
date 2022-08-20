/*
  Error Page Heading Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { ErrorPageHeading } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Error Page Heading Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<ErrorPageHeading />)
    expect(asFragment()).toMatchSnapshot()
  })
})
