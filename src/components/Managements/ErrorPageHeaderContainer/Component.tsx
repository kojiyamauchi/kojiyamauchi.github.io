/*
  Error Page Header Container Component.
*/

import { ErrorPageHeading } from '@/components/Presentations/ErrorPageHeading'
import { ErrorPageNavigation } from '@/components/Presentations/ErrorPageNavigation'
import styles from './style.module.scss'

export const ErrorPageHeaderContainer: React.VFC = (): JSX.Element => {
  return (
    <header className={`${styles.wrapper} error-page-header-container`}>
      <ErrorPageHeading />
      <ErrorPageNavigation />
    </header>
  )
}
