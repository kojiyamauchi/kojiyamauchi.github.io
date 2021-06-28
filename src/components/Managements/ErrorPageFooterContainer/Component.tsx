/*
  Error Page Footer Container Component.
*/

import { Copyright } from '@/components/Presentations/Copyright'
import styles from './style.module.scss'

export const ErrorPageFooterContainer: React.VFC = (): JSX.Element => {
  return (
    <footer className={`${styles.wrapper} error-page-footer-container`}>
      <Copyright parent="error" />
    </footer>
  )
}
