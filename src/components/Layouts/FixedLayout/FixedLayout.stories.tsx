/*
  Fixed Layout Component Storybook.
*/

import { useEffect } from 'react'
import { FixedLayout } from './'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
import { modalToggle } from '@/ducks/Modal'
import { aboutMeToggle } from '@/ducks/AboutMe'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Fixed Layout Component',
  component: FixedLayout
}

export default storiesInfo

export const Default = (): JSX.Element => {
  useEffect(() => {
    return (): void => {
      store.dispatch(modalToggle({ isOpen: false }))
      store.dispatch(aboutMeToggle({ isOpen: false }))
    }
  })

  return (
    <Provider store={store}>
      <FixedLayout pages="storybook" currentLocation="storybook" />
    </Provider>
  )
}
