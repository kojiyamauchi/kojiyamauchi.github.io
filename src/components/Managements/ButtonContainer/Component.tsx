/*
  Button Container Component.
*/

import { shallowEqual, useSelector } from 'react-redux'

import { CloseButton } from '@/components/Presentations/CloseButton'
import { DynamicComponentOpenButton } from '@/components/Presentations/OpenButton'
import { store } from '@/ducks'
import { modalToggle } from '@/ducks/Modal'
import { StoreTypes } from '@/types/type'

import styles from './style.module.scss'

export const modalOpen = (): void => void store.dispatch(modalToggle({ isOpen: true }))
export const modalClose = (): void => void store.dispatch(modalToggle({ isOpen: false }))

type Props = {
  storybook?: boolean
}

export const ButtonContainer: React.VFC<Props> = ({ storybook = false }): JSX.Element => {
  const isOpen = useSelector<StoreTypes, boolean>((state) => state.modalStore.isOpen, shallowEqual)
  return (
    <div className={`${styles.wrapper} button-container`}>
      <DynamicComponentOpenButton modalState={isOpen} modalOpen={modalOpen} storybook={storybook} />
      <CloseButton modalState={isOpen} modalClose={modalClose} />
    </div>
  )
}
