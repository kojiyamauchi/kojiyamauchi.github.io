/*
  Error Page Header Container Component Storybook.
*/

import { ErrorPageHeaderContainer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Error Page Header Container Component',
  component: ErrorPageHeaderContainer
}

export default storiesInfo

export const Default = (): JSX.Element => <ErrorPageHeaderContainer />
