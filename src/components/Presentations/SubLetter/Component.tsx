/*
  Sub Letter Component.
*/

import { useEffect, useRef } from 'react'

import styles from './style.module.scss'

type Props = {
  visited: boolean
}

export const SubLetter: React.FC<Props> = ({ visited }): JSX.Element => {
  const myComponent = useRef<HTMLHeadingElement>(null)

  useEffect(() => void myComponent.current!.classList.add('is-display'))

  return (
    <h2 className={`${styles.wrapper} sub-letter ${visited ? 'is-visited' : ''}`} ref={myComponent}>
      kojiyamauchi.github.io
    </h2>
  )
}
