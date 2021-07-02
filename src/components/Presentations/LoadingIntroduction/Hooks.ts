/*
  Loading Introduction Private Hooks.
*/

import { useRef, useState, useEffect, RefObject } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { StoreTypes } from '@/types/type'

export const sleep = (ms: number): Promise<number> => {
  return new Promise((resolve): number => {
    return setTimeout(resolve, ms)
  })
}

export const hideLoading = async (loadingState: boolean, storybook: boolean, myComponentCurrent: HTMLDivElement): Promise<void> => {
  if (loadingState && !storybook) {
    await sleep(1000)
    myComponentCurrent.classList.add('is-hide')
    await sleep(850)
    myComponentCurrent.classList.remove('is-active')
  }
}

export type hooksReturnType = {
  myComponent: RefObject<HTMLDivElement>
  loading: boolean
}

export const useLoadingIntroduction = (storybook: boolean): hooksReturnType => {
  const myComponent = useRef(null)
  const visited = useSelector<StoreTypes, boolean>((state) => state.firstVisitStore.isVisited, shallowEqual)
  const [loading] = useState(!visited)

  useEffect(() => {
    hideLoading(loading, storybook, myComponent.current!)
  }, [loading, storybook])

  return { myComponent, loading }
}
