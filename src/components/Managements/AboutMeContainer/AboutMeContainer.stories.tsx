/*
  About Me Container Component Storybook.
*/

import { useEffect } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'
import { aboutMeToggle } from '@/ducks/AboutMe'

import { AboutMeContainer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'About Me Container Component',
  component: AboutMeContainer
}

export default storiesInfo

export const Default = (): JSX.Element => {
  useEffect(() => {
    store.dispatch(aboutMeToggle({ isOpen: true }))
    return (): void => void store.dispatch(aboutMeToggle({ isOpen: false }))
  })

  return (
    <Provider store={store}>
      <AboutMeContainer />
    </Provider>
  )
}
