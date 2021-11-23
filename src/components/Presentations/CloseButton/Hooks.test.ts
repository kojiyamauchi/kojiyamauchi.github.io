/**
 * @jest-environment jsdom
 */
/*
  Close Button Private Hooks Unit Test.
  Basically, Testing Around Hooks Return Values is Done on the Component Side.
*/

import { sleep, toggleCloseButton, addClasses } from './Hooks'
import '@testing-library/jest-dom/extend-expect'
// import { renderHook /* , act*/ } from '@testing-library/react-hooks'

beforeAll(() => jest.useFakeTimers())
beforeEach(() => {})

describe('Close Button Private Hooks Each Function Unit Test', () => {
  it('sleep Fn', async () => {
    const mockNumber = 5000
    const mockFn = jest.fn()
    sleep(mockNumber).then(mockFn)
    jest.advanceTimersByTime(2500)
    await Promise.resolve()
    expect(mockFn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(2500)
    await Promise.resolve()
    expect(mockFn).toHaveBeenCalled()
  })
  it('toggleCloseButton Fn', () => {
    const button = document.createElement('button')
    const mockStateFirst = true
    const mockStateSecond = false
    toggleCloseButton(mockStateFirst, button)
    expect(button).toHaveClass('is-active')
    toggleCloseButton(mockStateSecond, button)
    expect(button).not.toHaveClass('is-active')
  })
  it('addClasses Fn', async () => {
    const parent = document.createElement('div')
    const blockNumber = 9
    const pendingTime = 75
    Array.from({ length: blockNumber }, () => parent.appendChild(document.createElement('span')))
    addClasses(parent.children)
    jest.advanceTimersByTime(pendingTime * blockNumber)
    await Promise.resolve()
    Array.from(parent.children, (selector) => expect(selector).toHaveClass('is-active'))
  })
})

afterEach(() => {})
afterAll(() => jest.useRealTimers())
