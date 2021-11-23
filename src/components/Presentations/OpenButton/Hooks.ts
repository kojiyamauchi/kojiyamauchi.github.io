/*
  Open Button Private Hooks.
*/

import { useEffect, useRef, RefObject } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { StoreTypes } from '@/types/type'

const letter = 'APPS'

export const sleep = (ms: number): Promise<number> => {
  return new Promise((resolve): number => {
    return setTimeout(resolve, ms)
  })
}

export const toggleOpenButton = (modalState: boolean, myComponentCurrent: HTMLButtonElement): void => {
  !modalState ? myComponentCurrent.classList.add('is-active') : myComponentCurrent.classList.remove('is-active')
}

export const showLetter = (dom: HTMLCollection): void => {
  Array.from(dom, async (selector, index) => {
    await sleep(75 * index)
    selector.classList.add('is-active')
  })
}

export const hideLetter = (dom: HTMLCollection): void => {
  Array.from(dom, async (selector, index) => {
    await sleep(75 * index)
    selector.classList.remove('is-active')
  })
}

export const randomClass = (): string => {
  const classArr = ['is-active01', 'is-active02', 'is-active03']
  const generateRandomClass = classArr[Math.floor(Math.random() * classArr.length)]
  return generateRandomClass
}

export type hooksReturnType = {
  myComponent: RefObject<HTMLButtonElement>
  letter: string
  randomClass: () => string
}

export const useOpenButton = (modalState: boolean, storybook: boolean): hooksReturnType => {
  const myComponent = useRef<HTMLButtonElement>(null)
  const isOpen = useSelector<StoreTypes, boolean>((state) => state.modalStore.isOpen, shallowEqual)

  useEffect(() => void toggleOpenButton(modalState, myComponent.current!))

  useEffect(() => {
    myComponent.current!.addEventListener('mouseenter', () => window.innerWidth > 767 && showLetter(myComponent.current!.firstElementChild!.children))
    myComponent.current!.addEventListener('mouseleave', () => window.innerWidth > 767 && hideLetter(myComponent.current!.firstElementChild!.children))
  })

  useEffect(() => {
    const layout = document.querySelector('.fixed-layout')
    if (!storybook && layout) {
      isOpen ? layout.classList.add('is-blur') : layout.classList.remove('is-blur')
    }
  })

  return { myComponent, letter, randomClass }
}
