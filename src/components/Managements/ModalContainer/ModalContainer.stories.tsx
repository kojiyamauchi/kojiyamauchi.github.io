/*
  Modal Container Component Storybook.
*/

import { useEffect } from 'react'
import { ModalContainer } from './Component'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
import { modalToggle } from '@/ducks/Modal'
import { aboutMeToggle } from '@/ducks/AboutMe'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Modal Container Component',
  component: ModalContainer
}

export default storiesInfo

export const Default = (): JSX.Element => {
  useEffect(() => {
    store.dispatch(modalToggle({ isOpen: true }))
    return (): void => {
      store.dispatch(modalToggle({ isOpen: false }))
      store.dispatch(aboutMeToggle({ isOpen: false }))
    }
  })

  return (
    <Provider store={store}>
      <ModalContainer />
    </Provider>
  )
}
