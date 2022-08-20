/**
 * @jest-environment jsdom
 */
/*
  Typography Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { Typography } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Typography Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<Typography visited={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
