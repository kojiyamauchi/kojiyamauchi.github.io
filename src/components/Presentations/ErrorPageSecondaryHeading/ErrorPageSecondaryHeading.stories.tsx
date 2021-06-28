/*
  Error Page Secondary Heading Component Storybook.
*/

import { ErrorPageSecondaryHeading } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Error Page Secondary Heading Component',
  component: ErrorPageSecondaryHeading
}

export default storiesInfo

export const Default = (): JSX.Element => <ErrorPageSecondaryHeading letter="Error Sample on Storybook" />
