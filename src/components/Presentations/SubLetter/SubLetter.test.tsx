/**
 * @jest-environment jsdom
 */
/*
  Sub Letter Component Unit Test.
*/

import { SubLetter } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Sub Letter Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<SubLetter visited={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
