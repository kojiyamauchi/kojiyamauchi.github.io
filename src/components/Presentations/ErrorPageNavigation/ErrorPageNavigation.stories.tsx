/*
  Error Page Navigation Component Storybook.
*/

import { ErrorPageNavigation } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Error Page Navigation Component',
  component: ErrorPageNavigation
}

export default storiesInfo

export const Default = (): JSX.Element => <ErrorPageNavigation />
