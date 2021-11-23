/**
 * @jest-environment jsdom
 */
/*
  Loading Introduction Private Hooks Unit Test.
  Basically, Testing Around Hooks Return Values is Done on the Component Side.
*/

import { sleep, hideLoading } from './Hooks'
import '@testing-library/jest-dom/extend-expect'
// import { renderHook /* , act*/ } from '@testing-library/react-hooks'

beforeAll(() => jest.useFakeTimers())
beforeEach(() => {})

describe('Loading Introduction Private Hooks Each Function Unit Test', () => {
  it('sleep Fn', async () => {
    const mockNumber = 5000
    const mockFn = jest.fn()
    sleep(mockNumber).then(mockFn)
    jest.advanceTimersByTime(4999)
    await Promise.resolve()
    expect(mockFn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(1)
    await Promise.resolve()
    expect(mockFn).toHaveBeenCalled()
  })
  it('hideLoading Fn', async () => {
    const mockLoadingState = true
    const mockStorybookState = false
    const mockDom = document.createElement('div')
    mockDom.classList.add('is-active')
    hideLoading(mockLoadingState, mockStorybookState, mockDom)
    jest.advanceTimersByTime(999)
    await Promise.resolve()
    expect(mockDom).not.toHaveClass('is-hide')
    jest.advanceTimersByTime(1000)
    await Promise.resolve()
    expect(mockDom).toHaveClass('is-hide')
    jest.advanceTimersByTime(849)
    await Promise.resolve()
    expect(mockDom).toHaveClass('is-active')
    jest.advanceTimersByTime(850)
    await Promise.resolve()
    expect(mockDom).not.toHaveClass('is-active')
  })
})

afterEach(() => {})
afterAll(() => jest.useRealTimers())
