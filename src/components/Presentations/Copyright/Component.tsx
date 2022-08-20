/*
  Copyright Component.
*/

import { useEffect, useState } from 'react'

import styles from './style.module.scss'

type Props = {
  className?: string
  parent: 'footer' | 'modal' | 'about-me' | 'error'
}

export const Copyright: React.VFC<Props> = ({ className, parent }): JSX.Element => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <a className={`${styles.wrapper} ${className} is-${parent}`} href="http://kojiyamauchi.com" target="_blank" rel="noreferrer">
      © {year} All The Small Things, All Rights Reserved.
    </a>
  )
}
