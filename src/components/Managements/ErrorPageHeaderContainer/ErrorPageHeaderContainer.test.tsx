/*
  Error Page Header Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { ErrorPageHeaderContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Error Page Header Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<ErrorPageHeaderContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
