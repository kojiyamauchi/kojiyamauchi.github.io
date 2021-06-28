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
    expect(store.getState().modalStore.isOpen).toBeTruthy
  })
  it('Modal Close', () => {
    store.dispatch(modalToggle({ isOpen: false }))
    expect(store.getState().modalStore.isOpen).toBeFalsy
  })
})

afterEach(() => {})
afterAll(() => {})
