/*
  Close Button.
*/

import { useRef, useEffect } from 'react'
import styled from 'styled-components'
// import { BreakPoint } from '@/styles/StyleMixins'

const letter = 'CLOSE'

const sleep = (ms: number): Promise<number> => {
  return new Promise((resolve): number => {
    return setTimeout(resolve, ms)
  })
}

type Props = {
  className?: string
  showCloseButton: (myComponent: HTMLDivElement) => void
  hideCloseButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CloseButtonComponent: React.FC<Props> = ({ className, showCloseButton, hideCloseButton }): JSX.Element => {
  const myComponent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    showCloseButton(myComponent.current!)
    Array.from(myComponent.current!.firstElementChild!.children, async (selector, index) => {
      await sleep(75 * index)
      selector.classList.add('is-active')
    })
    return () => {}
  })

  return (
    <div className={`${className} close-button`} ref={myComponent} onClick={hideCloseButton}>
      <span className="close-letters">
        {Array.from(letter, (info, index) => (
          <span className="close-letter" key={index}>
            {info}
          </span>
        ))}
      </span>
    </div>
  )
}

const StyledComponent = styled(CloseButtonComponent)`
  width: 60px;
  height: 60px;
  background-color: #f5a100;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 64px;
  z-index: 100;
  margin: auto;
  transform: translateY(136px);
  visibility: hidden;
  transition: all 0.5s ease-in;
  will-change: transform, visibility;

  &.is-active {
    transform: translateY(0);
    visibility: visible;
    transition: all 0.5s ease-out 0.5s;
  }

  .close-letter {
    font-size: 1.6em;
    font-weight: 900;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    display: inline-block;
    margin: 0 0 5px 0;
    will-change: transform;

    &.is-active {
      animation: text-bounce 0.5s ease-out infinite;
    }
  }

  @keyframes text-bounce {
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(2.5%);
    }

    50% {
      transform: translateY(0);
    }

    75% {
      transform: translateY(-2.5%);
    }

    100% {
      transform: translateY(0);
    }
  }
`

export const CloseButton = StyledComponent
