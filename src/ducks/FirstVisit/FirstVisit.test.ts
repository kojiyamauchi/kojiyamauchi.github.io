/*
  First Visit Store Unit Test.
*/

import { store } from '@/ducks'
import { firstVisitToggle } from '@/ducks/FirstVisit'

beforeAll(() => {})
beforeEach(() => {})

describe('First Visit Store Unit Test', () => {
  it('Visited', () => {
    store.dispatch(firstVisitToggle({ isVisited: true }))
    expect(store.getState().firstVisitStore.isVisited).toBe(true)
  })
  it('Unvisited', () => {
    store.dispatch(firstVisitToggle({ isVisited: false }))
    expect(store.getState().firstVisitStore.isVisited).toBe(false)
  })
})

afterEach(() => {})
afterAll(() => {})
