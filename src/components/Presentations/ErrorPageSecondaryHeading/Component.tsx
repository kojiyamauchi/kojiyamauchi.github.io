/*
  Error Pages Secondary Heading Component.
*/

import styles from './style.module.scss'

type Props = {
  letter: string
  translation?: boolean
}

export const ErrorPageSecondaryHeading: React.FC<Props> = ({ letter, translation }): JSX.Element => (
  <h2 className={`${styles['secondary-heading']} error-page-secondary-heading page-heading ${translation ? styles['is-translation'] : ''}`}>{letter}.😵</h2>
)
