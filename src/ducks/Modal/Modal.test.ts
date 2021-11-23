/*
  Modal Store Unit Test.
*/

import { store } from '@/ducks'
import { modalToggle } from '@/ducks/Modal'

beforeAll(() => {})
beforeEach(() => {})

describe('Modal Store Unit Test', () => {
  it('Modal Open', () => {
    store.dispatch(modalToggle({ isOpen: true }))
    expect(store.getState().modalStore.isOpen).toBe(true)
  })
  it('Modal Close', () => {
    store.dispatch(modalToggle({ isOpen: false }))
    expect(store.getState().modalStore.isOpen).toBe(false)
  })
})

afterEach(() => {})
afterAll(() => {})
