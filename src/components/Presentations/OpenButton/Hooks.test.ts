/*
  Open Button Private Hooks Unit Test.
  Basically, Testing Around Hooks Return Values is Done on the Component Side.
*/

import { sleep, toggleOpenButton, showLetter, hideLetter, randomClass } from './Hooks'
import '@testing-library/jest-dom/extend-expect'
// import { renderHook /* , act*/ } from '@testing-library/react-hooks'

beforeAll(() => jest.useFakeTimers())
beforeEach(() => {})

describe('Open Button Private Hooks Each Function Unit Test', () => {
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
  it('toggleOpenButton Fn', () => {
    const button = document.createElement('button')
    const mockStateFirst = false
    toggleOpenButton(mockStateFirst, button)
    expect(button).toHaveClass('is-active')
    const mockStateSecond = true
    toggleOpenButton(mockStateSecond, button)
    expect(button).not.toHaveClass('is-active')
  })
  it('showLetter Fn', async () => {
    const parent = document.createElement('div')
    const length = 5
    const pendingTime = 75
    Array.from({ length: length }, () => parent.appendChild(document.createElement('span')))
    showLetter(parent.children)
    jest.advanceTimersByTime(pendingTime * length)
    await Promise.resolve()
    Array.from(parent.children, (selector) => expect(selector).toHaveClass('is-active'))
  })
  it('hideLetter Fn', async () => {
    const parent = document.createElement('div')
    const letterLength = 4
    const pendingTime = 75
    Array.from({ length: letterLength }, () => parent.appendChild(document.createElement('span')))
    hideLetter(parent.children)
    jest.advanceTimersByTime(pendingTime * letterLength)
    await Promise.resolve()
    Array.from(parent.children, (selector) => expect(selector).not.toHaveClass('is-active'))
  })
  it('randomClass Fn', () => {
    const result = randomClass()
    expect(result === 'is-active01' || result === 'is-active02' || result === 'is-active03').toBe(true)
  })
})

afterEach(() => {})
afterAll(() => jest.useRealTimers())
