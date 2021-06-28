/*
  Logo Model Component Storybook.
*/

import { LogoModel } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Logo Model Component',
  component: LogoModel
}

export default storiesInfo

export const Default = (): JSX.Element => (
  <div style={{ width: '100%', height: '100vh' }}>
    <LogoModel visited={false} />
  </div>
)
