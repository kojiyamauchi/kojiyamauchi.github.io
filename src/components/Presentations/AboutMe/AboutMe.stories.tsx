/*
  About Me Component Storybook.
*/

import { AboutMe } from './Component'
import styles from './style.module.scss'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'About Me Component',
  component: AboutMe
}

export default storiesInfo

const mockFn = (): void => void console.log('Click')

export const Default = (): JSX.Element => (
  <div className={styles['storybook-wrapper']}>
    <AboutMe closeAboutMe={mockFn} />
  </div>
)
