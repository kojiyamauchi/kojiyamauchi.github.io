/*
  Error Layout Component Storybook.
*/

import { ErrorLayout } from './'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Error Layout Component',
  component: ErrorLayout
}

export default storiesInfo

export const Default = (): JSX.Element => <ErrorLayout pages="storybook" />
