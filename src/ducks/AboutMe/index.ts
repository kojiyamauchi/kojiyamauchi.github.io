/*
  About Me Store.
*/
import { createAction, createReducer } from '@reduxjs/toolkit'

import { AboutMeTypes } from '@/types/type'

const initialState: AboutMeTypes = {
  isOpen: false
}

export const aboutMeToggle = createAction<AboutMeTypes, 'aboutMe/toggle'>('aboutMe/toggle')

export const aboutMeReducer = createReducer(initialState, (builder) => {
  builder.addCase(aboutMeToggle, (state, action) => {
    return { ...state, ...action.payload }
  })
})
