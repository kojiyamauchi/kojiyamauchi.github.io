/*
  Image Component Storybook.
*/

import { Image } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Image Component',
  component: Image
}

export default storiesInfo

export const Default = (): JSX.Element => <Image image="logo" extension="webp" alt="Storybook Image" desktopWidth="450px" mobileWidth="80%" />
