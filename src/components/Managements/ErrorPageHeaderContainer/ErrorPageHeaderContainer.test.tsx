/**
 * @jest-environment jsdom
 */
/*
  Error Page Header Container Component Unit Test.
*/

import { ErrorPageHeaderContainer } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Error Page Header Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<ErrorPageHeaderContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
