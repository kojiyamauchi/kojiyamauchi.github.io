/*
  Button Container Component Storybook.
*/

import { useEffect } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'
import { modalToggle } from '@/ducks/Modal'

import { ButtonContainer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Button Container Component',
  component: ButtonContainer
}

export default storiesInfo

export const Default = (): JSX.Element => {
  useEffect(() => {
    return (): void => void store.dispatch(modalToggle({ isOpen: false }))
  })

  return (
    <Provider store={store}>
      <ButtonContainer storybook={true} />
    </Provider>
  )
}
