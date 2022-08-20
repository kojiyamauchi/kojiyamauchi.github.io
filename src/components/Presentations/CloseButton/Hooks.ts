/*
  Close Button Private Hooks.
*/

import { RefObject, useEffect, useRef } from 'react'

export const letter = 'CLOSE'

export const sleep = (ms: number): Promise<number> => {
  return new Promise((resolve): number => {
    return setTimeout(resolve, ms)
  })
}

export const toggleCloseButton = (modalState: boolean, myComponentCurrent: HTMLButtonElement): void => {
  modalState ? myComponentCurrent.classList.add('is-active') : myComponentCurrent.classList.remove('is-active')
}

export const addClasses = (HtmlCollection: HTMLCollection): void => {
  Array.from(HtmlCollection, async (selector, index) => {
    await sleep(75 * index)
    selector.classList.add('is-active')
  })
}

export type hooksReturnType = {
  myComponent: RefObject<HTMLButtonElement>
  letter: string
}

export const useCloseButton = (modalState: boolean): hooksReturnType => {
  const myComponent = useRef<HTMLButtonElement>(null)

  useEffect(() => void toggleCloseButton(modalState, myComponent.current!))
  useEffect(() => void addClasses(myComponent.current!.firstElementChild!.children))

  return { myComponent, letter }
}
