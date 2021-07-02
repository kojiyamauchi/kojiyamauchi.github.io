/*
  Store.
*/
import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './Modal'
import { aboutMeReducer } from './AboutMe'
import { firstVisitReducer } from './FirstVisit'

export const store = configureStore({
  reducer: {
    modalStore: modalReducer,
    aboutMeStore: aboutMeReducer,
    firstVisitStore: firstVisitReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
