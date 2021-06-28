/*
  Open Button Private Hooks Unit Test.
  Basically, Testing Around Hooks Return Values is Done on the Component Side.
*/

import { sleep, toggleOpenButton, showLetter, hideLetter, randomClass } from './Hooks'

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
    expect(button.classList.contains('is-active')).toBeTruthy
    const mockStateSecond = true
    toggleOpenButton(mockStateSecond, button)
    expect(button.classList.contains('is-active')).toBeFalsy
  })
  it('showLetter Fn', () => {
    const parent = document.createElement('div')
    const length = 5
    const pendingTime = 75
    Array.from({ length: length }, () => parent.appendChild(document.createElement('span')))
    showLetter(parent.children)
    jest.advanceTimersByTime(pendingTime * length)
    Array.from(parent.children, (selector) => {
      expect(selector.classList.contains('is-active')).toBeTruthy
    })
  })
  it('hideLetter Fn', () => {
    const parent = document.createElement('div')
    const letterLength = 4
    const pendingTime = 75
    Array.from({ length: letterLength }, () => parent.appendChild(document.createElement('span')))
    hideLetter(parent.children)
    jest.advanceTimersByTime(pendingTime * letterLength)
    Array.from(parent.children, (selector) => {
      expect(selector.classList.contains('is-active')).toBeFalsy
    })
  })
  it('randomClass Fn', () => {
    expect(randomClass() === 'is-active01' || randomClass() === 'is-active02' || randomClass() === 'is-active03').toBeTruthy
  })
})

afterEach(() => {})
afterAll(() => jest.useRealTimers())
