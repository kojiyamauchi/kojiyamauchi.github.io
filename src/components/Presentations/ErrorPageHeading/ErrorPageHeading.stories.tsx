/*
  Error Page Heading Component Storybook.
*/

import { ErrorPageHeading } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Error Page Heading Component',
  component: ErrorPageHeading
}

export default storiesInfo

export const Default = (): JSX.Element => <ErrorPageHeading />
