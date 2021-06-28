/*
  Jump To Old Portfolio Component Storybook.
*/

import { JumpToOldPortfolio } from './Component'
import styles from './style.module.scss'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Jump To Old Portfolio Component',
  component: JumpToOldPortfolio
}

export default storiesInfo

const mockFn = (): void => void console.log('Click!')

export const Default = (): JSX.Element => (
  <div className={styles['storybook-wrapper']}>
    <div className={styles['storybook-inner']}>
      <JumpToOldPortfolio copyrightHover={true} openAboutMe={mockFn} />
    </div>
  </div>
)
