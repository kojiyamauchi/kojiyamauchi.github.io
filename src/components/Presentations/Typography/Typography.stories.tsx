/*
  Typography Component Storybook.
*/

import { Typography } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Typography Component',
  component: Typography
}

export default storiesInfo

export const Default = (): JSX.Element => <Typography visited={true} />
