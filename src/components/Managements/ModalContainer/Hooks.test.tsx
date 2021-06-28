/*
  Modal Private Hooks Unit Test.
  Basically, Testing Around Hooks Return Values is Done on the Component Side.
*/

import { generateDeviceValue, generatePositionValue, cubesProps, switchGraffiti, switchModal } from './Hooks'

beforeAll(() => {})
beforeEach(() => {})

describe('Modal Private Hooks Each Function Unit Test', () => {
  it('generateDeviceValue', () => {
    const mockValue = {
      mobileMin: 1,
      mobileMax: 2,
      tabletMin: 3,
      tabletMax: 4,
      deskTopMin: 5,
      deskTopMax: 6
    }
    const { mobile, tablet, deskTop } = generateDeviceValue(
      mockValue.mobileMin,
      mockValue.mobileMax,
      mockValue.tabletMin,
      mockValue.tabletMax,
      mockValue.deskTopMin,
      mockValue.deskTopMax
    )
    expect(mobile > 1 || mobile < 2).toBeTruthy
    expect(tablet > 3 || tablet < 4).toBeTruthy
    expect(deskTop > 5 || deskTop < 6).toBeTruthy
  })
  it('generatePositionValue Fn', () => {
    const realValue = cubesProps[0].positionValue
    const { x, y } = generatePositionValue[0]
    expect(x.mobile > realValue.x.mobileMin || x.mobile < realValue.x.mobileMax).toBeTruthy
    expect(x.tablet > realValue.x.tabletMin || x.tablet < realValue.x.tabletMax).toBeTruthy
    expect(x.deskTop > realValue.x.deskTopMin || x.deskTop < realValue.x.deskTopMax).toBeTruthy
    expect(y.mobile > realValue.y.mobileMin || y.mobile < realValue.y.mobileMax).toBeTruthy
    expect(y.tablet > realValue.y.tabletMin || y.tablet < realValue.y.tabletMax).toBeTruthy
    expect(y.deskTop > realValue.y.deskTopMin || y.deskTop < realValue.y.deskTopMax).toBeTruthy
  })
  it('switchGraffiti', () => {
    const wrapper = document.createElement('div')
    const link = wrapper.appendChild(document.createElement('a'))
    link.classList.add('copyright')
    global.innerWidth = 768
    const mockFnFirst = jest.fn()
    switchGraffiti(wrapper, mockFnFirst)
    link.dispatchEvent(new Event('mouseenter'))
    expect(mockFnFirst).toHaveBeenCalled()
    const mockFnSecond = jest.fn()
    switchGraffiti(wrapper, mockFnSecond)
    link.dispatchEvent(new Event('mouseleave'))
    expect(mockFnSecond).toHaveBeenCalled()
    global.innerWidth = 767
    const mockFnThird = jest.fn()
    switchGraffiti(wrapper, mockFnThird)
    link.dispatchEvent(new Event('mouseenter'))
    expect(mockFnThird).not.toHaveBeenCalled()
    const mockFnFourth = jest.fn()
    switchGraffiti(wrapper, mockFnFourth)
    link.dispatchEvent(new Event('mouseleave'))
    expect(mockFnFourth).not.toHaveBeenCalled()
  })
  it('switchModal', () => {
    const dom = document.createElement('div')
    switchModal(true, dom)
    expect(dom.classList.contains('is-active')).toBeTruthy
    switchModal(false, dom)
    expect(dom.classList.contains('is-active')).toBeFalsy
  })
})

afterEach(() => {})
afterAll(() => {})
