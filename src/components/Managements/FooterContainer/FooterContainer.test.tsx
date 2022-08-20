/*
  Footer Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { FooterContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Footer Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<FooterContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
