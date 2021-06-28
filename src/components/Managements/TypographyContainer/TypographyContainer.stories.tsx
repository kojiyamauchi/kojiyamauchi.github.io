/*
  Typography Container Component Storybook.
*/

import { TypographyContainer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Typography Container Component',
  component: TypographyContainer
}

export default storiesInfo

export const Default = (): JSX.Element => <TypographyContainer visited={false} />
