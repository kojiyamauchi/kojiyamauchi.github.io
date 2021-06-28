/*
  Typography Component Unit Test.
*/

import { Typography } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Typography Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<Typography visited={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
