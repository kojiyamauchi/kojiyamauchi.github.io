/**
 * @jest-environment jsdom
 */
/*
  Error Layout Component Unit Test.
*/

import { ErrorLayout } from './'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Fixed Layout Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<ErrorLayout pages="ui-test" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
