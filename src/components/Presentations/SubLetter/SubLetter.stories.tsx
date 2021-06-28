/*
  Sub Letter Component Storybook.
*/

import { SubLetter } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Sub Letter Component',
  component: SubLetter
}

export default storiesInfo

export const Default = (): JSX.Element => <SubLetter visited={true} />
