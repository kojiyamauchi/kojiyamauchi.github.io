/*
  Open Button Component Storybook.
*/

import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { OpenButton } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Open Button Component',
  component: OpenButton
}

export default storiesInfo

const mockFn = (): void => {
  console.info('Click!🌞')
}

export const Default = (): JSX.Element => (
  <Provider store={store}>
    <div style={{ width: '60px', height: '60px', position: 'relative' }}>
      <OpenButton modalState={false} modalOpen={mockFn} storybook={true} />
    </div>
  </Provider>
)
