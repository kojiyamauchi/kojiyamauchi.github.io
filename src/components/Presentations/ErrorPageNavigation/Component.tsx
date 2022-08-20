/*
  Error Page Navigation Component.
*/

import Link from 'next/link'

import styles from './style.module.scss'

export const ErrorPageNavigation: React.FC = (): JSX.Element => {
  const link = [{ path: '/', letter: 'Back to Top Page', id: 1 }]

  const navigation = (): JSX.Element[] => {
    return link.map(
      (info): JSX.Element => (
        <li key={info.id} className="error-page-navi-list">
          <Link href={`${info.path}`}>
            <a className={`${styles.link} error-page-navi-link`}>{info.letter}</a>
          </Link>
        </li>
      )
    )
  }

  return <ul className={`${styles.wrapper} error-page-navigation`}>{navigation()}</ul>
}
