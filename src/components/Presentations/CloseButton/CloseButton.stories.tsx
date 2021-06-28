/*
  Close Button Component Storybook.
*/

import { CloseButton } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Close Button Component',
  component: CloseButton
}

export default storiesInfo

const mockFn = (): void => {
  console.info('Click!🌞')
}

export const Default = (): JSX.Element => (
  <div style={{ width: '60px', height: '60px', position: 'relative' }}>
    <CloseButton modalState={true} modalClose={mockFn} />
  </div>
)
