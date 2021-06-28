/*
  Store.
*/
import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './Modal'
import { aboutMeReducer } from './AboutMe'

export const store = configureStore({
  reducer: {
    modalStore: modalReducer,
    aboutMeStore: aboutMeReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
