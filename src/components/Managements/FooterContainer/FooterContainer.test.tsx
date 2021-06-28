/*
  Footer Container Component Unit Test.
*/

import { FooterContainer } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Footer Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<FooterContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
