/**
 * @jest-environment jsdom
 */
/*
  Link Cube Private Hooks Unit Test.
  Basically, Testing Around Hooks Return Values is Done on the Component Side.
*/

import '@testing-library/jest-dom/extend-expect'

import { generateCubeSize, generatePosition } from './Hooks'
// import { renderHook /* , act*/ } from '@testing-library/react-hooks'

beforeAll(() => {})
beforeEach(() => {})

describe('Link Cube Private Hooks Each Function Unit Test', () => {
  it('generatePosition Fn', () => {
    const mockVar = {
      mobile: 100,
      tablet: 200,
      deskTop: 300
    }
    global.innerWidth = 767
    const resultFirst = generatePosition(mockVar.mobile, mockVar.tablet, mockVar.deskTop)
    expect(resultFirst).toBe(mockVar.mobile)
    global.innerWidth = 1024
    const resultSecond = generatePosition(mockVar.mobile, mockVar.tablet, mockVar.deskTop)
    expect(resultSecond).toBe(mockVar.tablet)
    global.innerWidth = 2048
    const resultThird = generatePosition(mockVar.mobile, mockVar.tablet, mockVar.deskTop)
    expect(resultThird).toBe(mockVar.deskTop)
  })
  it('generateCubeSize Fn', () => {
    global.innerWidth = 1024
    const resultFirst = generateCubeSize(false)
    expect(resultFirst).toBe(0.5)
    global.innerWidth = 2048
    const resultSecond = generateCubeSize(false)
    expect(resultSecond).toBe(0.6)
    global.innerWidth = 1024
    const resultThird = generateCubeSize(true)
    expect(resultThird).toBe(1.4)
    global.innerWidth = 2048
    const resultFourth = generateCubeSize(true)
    expect(resultFourth).toBe(1.5)
  })
})

afterEach(() => {})
afterAll(() => {})
