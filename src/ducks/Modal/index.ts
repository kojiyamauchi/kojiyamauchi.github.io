/*
  Modal Store.
*/
import { createAction, createReducer } from '@reduxjs/toolkit'

import { ModalTypes } from '@/types/type'

const initialState: ModalTypes = {
  isOpen: false
}

export const modalToggle = createAction<ModalTypes, 'modal/toggle'>('modal/toggle')

export const modalReducer = createReducer(initialState, (builder) => {
  builder.addCase(modalToggle, (state, action) => {
    return { ...state, ...action.payload }
  })
})
