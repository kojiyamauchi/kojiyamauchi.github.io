/*
  Logo Model Component Storybook.
*/

import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { LogoModel } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Logo Model Component',
  component: LogoModel
}

export default storiesInfo

export const Default = (): JSX.Element => (
  <Provider store={store}>
    <div style={{ width: '100%', height: '100vh' }}>
      <LogoModel />
    </div>
  </Provider>
)
