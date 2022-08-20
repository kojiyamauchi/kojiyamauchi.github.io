/*
  Open Button Component.
*/

import { useOpenButton } from './Hooks'
import styles from './style.module.scss'

export type Props = {
  modalState: boolean
  modalOpen: () => void
  storybook: boolean
  uiTest?: boolean
}

export const OpenButton: React.FC<Props> = ({ modalState, modalOpen, storybook, uiTest = false }): JSX.Element => {
  const { myComponent, letter, randomClass } = useOpenButton(modalState, storybook)

  return (
    <button className={`${styles.wrapper} open-button is-active`} ref={myComponent} onClick={(): void => modalOpen()}>
      <span className={`${styles['open-letters-wrapper']} open-letters-wrapper`}>
        {Array.from(letter, (info, index) => (
          <span className={`${styles['open-letter']} open-letter`} key={index}>
            {info}
          </span>
        ))}
      </span>
      {Array.from({ length: 9 }, (_info, index) => (
        <span className={`${styles['button-block']} button-block ${!uiTest ? randomClass() : ''}`} key={index} />
      ))}
    </button>
  )
}
