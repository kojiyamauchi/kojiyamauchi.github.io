/*
  Footer Container Component.
*/

import { Copyright } from '@/components/Presentations/Copyright'

import styles from './style.module.scss'

export const FooterContainer: React.VFC = (): JSX.Element => {
  return (
    <footer className={`${styles.wrapper} footer-container`}>
      <Copyright parent="footer" />
    </footer>
  )
}
