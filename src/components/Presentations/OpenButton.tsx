/*
  Open Button.
*/

import { useRef, useEffect } from 'react'
import styled from 'styled-components'
// import { BreakPoint } from '@/styles/StyleMixins'

const letter = 'APPS'

const sleep = (ms: number): Promise<number> => {
  return new Promise((resolve): number => {
    return setTimeout(resolve, ms)
  })
}

const randomClass = () => {
  const classArr = ['is-active01', 'is-active02', 'is-active03']
  const generateRandomClass = classArr[Math.floor(Math.random() * classArr.length)]
  return generateRandomClass
}

type Props = {
  className?: string
  showOpenButton: (myComponent: HTMLDivElement) => void
  hideOpenButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const OpenButtonComponent: React.FC<Props> = ({ className, showOpenButton, hideOpenButton }): JSX.Element => {
  const myComponent = useRef<HTMLDivElement>(null)

  const showLetter = () => {
    Array.from(myComponent.current!.firstElementChild!.children, async (selector, index) => {
      await sleep(75 * index)
      selector.classList.add('is-active')
    })
  }

  const hideLetter = () => {
    Array.from(myComponent.current!.firstElementChild!.children, async (selector, index) => {
      await sleep(75 * index)
      selector.classList.remove('is-active')
    })
  }

  useEffect(() => {
    showOpenButton(myComponent.current!)
    myComponent.current!.addEventListener('mouseenter', () => window.innerWidth > 768 && showLetter())
    myComponent.current!.addEventListener('mouseleave', () => window.innerWidth > 768 && hideLetter())
    return () => {}
  })

  return (
    <div className={`${className} open-button is-active`} ref={myComponent} onClick={hideOpenButton}>
      <span className="open-letters">
        {Array.from(letter, (info, index) => (
          <span className="open-letter" key={index}>
            {info}
          </span>
        ))}
      </span>
      {Array.from({ length: 9 }, (_info, index) => (
        <span className={`button-block ${randomClass()}`} key={index} />
      ))}
    </div>
  )
}

const StyledComponent = styled(OpenButtonComponent)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 64px;
  z-index: 101;
  margin: auto;
  visibility: hidden;
  transform: translateY(136px);
  transition: all 0.5s ease-in;
  will-change: visibility, transform;

  &:hover {
    cursor: pointer;
  }

  &.is-active {
    visibility: visible;
    transform: translateY(0);
    transition: all 0.5s ease-out 0.5s;
  }

  .open-letters {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .open-letter {
    color: #f5a100;
    font-size: 2.2em;
    font-weight: bold;
    text-shadow: 2px 2px 1px #fff;
    display: inline-block;
    transform: translateY(5px) scale(0);
    transition: transform 0.25s ease-in;
    will-change: transform;

    &.is-active {
      transform: translateY(-5px) scale(1);
      transition: transform 0.25s ease-out;
    }
  }

  .button-block {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #f5a100;
    box-shadow: 2px 2px 1px #fff;
    margin: 0 0 2.5px 0;
    will-change: transform;

    &:nth-last-child(-n + 3) {
      margin: 0;
    }

    &.is-active01 {
      animation: block-scale 0.75s linear 0s infinite;
    }

    &.is-active02 {
      animation: block-scale 0.75s linear 0.25s infinite;
    }

    &.is-active03 {
      animation: block-scale 0.75s linear 0.5s infinite;
    }
  }

  @keyframes block-scale {
    0% {
      transform: scale(1);
    }

    25% {
      transform: scale(1.125);
    }

    50% {
      transform: scale(1);
    }

    75% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }
`

export const OpenButton = StyledComponent
