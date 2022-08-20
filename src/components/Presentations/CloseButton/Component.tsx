/*
  Close Button Component.
*/

import { useCloseButton } from './Hooks'
import styles from './style.module.scss'

type Props = {
  modalState: boolean
  modalClose: () => void
}

export const CloseButton: React.FC<Props> = ({ modalState, modalClose }): JSX.Element => {
  const { myComponent, letter } = useCloseButton(modalState)

  return (
    <button className={`${styles.wrapper} close-button`} ref={myComponent} onClick={(): void => modalClose()}>
      <span className="close-letters-wrapper">
        {Array.from(letter, (info, index) => (
          <span className={`${styles['close-letter']} close-letter`} key={index}>
            {info}
          </span>
        ))}
      </span>
    </button>
  )
}
