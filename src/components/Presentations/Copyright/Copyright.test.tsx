/*
  Copyright Component Unit Test.
*/

import { Copyright } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Copyright Component Unit Test', () => {
  it('Snap Shot Testing for Footer', () => {
    const { asFragment } = render(<Copyright parent="footer" />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Snap Shot Testing for Modal', () => {
    const { asFragment } = render(<Copyright parent="modal" />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Snap Shot Testing for About Me', () => {
    const { asFragment } = render(<Copyright parent="about-me" />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Snap Shot Testing for Error', () => {
    const { asFragment } = render(<Copyright parent="error" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
