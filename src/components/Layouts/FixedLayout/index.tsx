/*
  Fixed Layout.
*/

import { Children, cloneElement, isValidElement } from 'react'

import { AboutMeContainer } from '@/components/Managements/AboutMeContainer'
import { ButtonContainer } from '@/components/Managements/ButtonContainer'
import { FooterContainer } from '@/components/Managements/FooterContainer'
import { ModalContainer } from '@/components/Managements/ModalContainer'
import { PageProps } from '@/types/type'

import styles from './style.module.scss'

type Props = {
  pages: PageProps['pages']
  currentLocation?: string
  loading?: React.ReactNode
}

export const FixedLayout: React.FC<Props> = ({ pages, children, currentLocation, loading }): JSX.Element => {
  const childrenWithProps = Children.map(children, (child) => {
    return isValidElement(child) && cloneElement(child, { location: currentLocation })
  })

  return (
    <div className={`${pages} ${styles.wrapper} fixed-layout `}>
      <main className={`${styles['main-content']} main-content`}>{childrenWithProps}</main>
      <ModalContainer />
      <ButtonContainer />
      <AboutMeContainer />
      {loading}
      <FooterContainer />
    </div>
  )
}
