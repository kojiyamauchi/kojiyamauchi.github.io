/*
  No Content Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { NoContent } from './Component'
// import userEvent from '@testing-library/user-event'

describe('No Content Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<NoContent copyrightHover={false} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
