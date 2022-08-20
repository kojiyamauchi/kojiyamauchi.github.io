/*
  Store.
*/
import { configureStore } from '@reduxjs/toolkit'

import { aboutMeReducer } from './AboutMe'
import { firstVisitReducer } from './FirstVisit'
import { modalReducer } from './Modal'

export const store = configureStore({
  reducer: {
    modalStore: modalReducer,
    aboutMeStore: aboutMeReducer,
    firstVisitStore: firstVisitReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
