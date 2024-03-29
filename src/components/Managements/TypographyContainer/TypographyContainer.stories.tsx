/*
  Typography Container Component Storybook.
*/

import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { TypographyContainer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Typography Container Component',
  component: TypographyContainer
}

export default storiesInfo

export const Default = (): JSX.Element => (
  <Provider store={store}>
    <TypographyContainer />
  </Provider>
)
