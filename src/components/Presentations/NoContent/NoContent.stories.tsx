/*
  No Content Component Storybook.
*/

import { NoContent } from './Component'
import styles from './style.module.scss'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'No Content Component',
  component: NoContent
}

export default storiesInfo

export const Default = (): JSX.Element => (
  <div className={styles['storybook-wrapper']}>
    <div className={styles['storybook-inner']}>
      <NoContent copyrightHover={false} />
    </div>
  </div>
)
