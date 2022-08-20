/*
  First Visit Store.
*/
import { createAction, createReducer } from '@reduxjs/toolkit'

import { FirstVisitTypes } from '@/types/type'

const initialState: FirstVisitTypes = {
  isVisited: false
}

export const firstVisitToggle = createAction<FirstVisitTypes, 'firstVisit/toggle'>('firstVisit/toggle')

export const firstVisitReducer = createReducer(initialState, (builder) => {
  builder.addCase(firstVisitToggle, (state, action) => {
    return { ...state, ...action.payload }
  })
})
