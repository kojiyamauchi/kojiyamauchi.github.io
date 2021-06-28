/*
  Jump To Old Portfolio Component Unit Test.
*/

import { JumpToOldPortfolio } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Jump To Old Portfolio Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const mockFn = jest.fn()
    const { asFragment } = render(<JumpToOldPortfolio copyrightHover={true} openAboutMe={mockFn} />)
    expect(asFragment()).toMatchSnapshot()
  })
})