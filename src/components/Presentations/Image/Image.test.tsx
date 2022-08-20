/**
 * @jest-environment jsdom
 */
/*
  Image Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { Image } from './Component'
// import userEvent from '@testing-library/user-event'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
})

describe('Image Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<Image image="logo" extension="webp" alt="Unit Test Image" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
