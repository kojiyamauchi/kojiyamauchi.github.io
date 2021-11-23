/**
 * @jest-environment jsdom
 */
/*
  No Content Component Unit Test.
*/

import { NoContent } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('No Content Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<NoContent copyrightHover={false} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
