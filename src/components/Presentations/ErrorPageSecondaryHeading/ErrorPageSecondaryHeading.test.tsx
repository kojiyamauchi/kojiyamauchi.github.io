/*
  Error Page Secondary Heading Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { ErrorPageSecondaryHeading } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Error Page Secondary Heading Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<ErrorPageSecondaryHeading letter="Snap Shot Test" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
