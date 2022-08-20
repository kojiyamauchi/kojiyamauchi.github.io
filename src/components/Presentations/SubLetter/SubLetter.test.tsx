/**
 * @jest-environment jsdom
 */
/*
  Sub Letter Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { SubLetter } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Sub Letter Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<SubLetter visited={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
