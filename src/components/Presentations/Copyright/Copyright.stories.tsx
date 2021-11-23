/*
  Copyright Component Storybook.
*/

import { Copyright } from './Component'
import styles from './style.module.scss'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Copyright Component',
  component: Copyright
}

export default storiesInfo

export const FooterCopyright = (): JSX.Element => <Copyright parent="footer" />
export const ModalCopyright = (): JSX.Element => (
  <div className={styles['storybook-modal-wrapper']}>
    <Copyright parent="modal" />
  </div>
)
export const AboutMeCopyright = (): JSX.Element => (
  <div className={styles['storybook-about-me-wrapper']}>
    <Copyright parent="about-me" />
  </div>
)
export const ErrorCopyright = (): JSX.Element => <Copyright parent="error" />
