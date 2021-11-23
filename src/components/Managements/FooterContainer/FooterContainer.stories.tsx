/*
  Footer Container Component Storybook.
*/

import { FooterContainer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Footer Container Component',
  component: FooterContainer
}

export default storiesInfo

export const Default = (): JSX.Element => <FooterContainer />
