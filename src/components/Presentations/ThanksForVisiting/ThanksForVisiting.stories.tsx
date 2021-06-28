/*
  Thanks For Visiting Component Storybook.
*/

import { ThanksForVisiting } from './Component'
import styles from './style.module.scss'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Thanks For Visiting Component',
  component: ThanksForVisiting
}

export default storiesInfo

const mockFn = (): void => void console.log('Click!')

export const Default = (): JSX.Element => (
  <div className={styles['storybook-wrapper']}>
    <div className={styles['storybook-inner']}>
      <ThanksForVisiting copyrightHover={false} openAboutMe={mockFn} />
    </div>
  </div>
)
