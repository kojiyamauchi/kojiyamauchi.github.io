/*
  Error Page Heading Component.
*/
import styles from './style.module.scss'

export const ErrorPageHeading: React.FC = (): JSX.Element => <h1 className={`${styles['primary-heading']} error-page-primary-heading`}>Error Page.</h1>
