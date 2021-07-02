/*
  Loading Introduction Component Storybook.
*/

import { LoadingIntroduction } from './Component'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Loading Introduction Component',
  component: LoadingIntroduction
}

export default storiesInfo

export const Default = (): JSX.Element => (
  <Provider store={store}>
    <LoadingIntroduction storybook={true} />
  </Provider>
)
