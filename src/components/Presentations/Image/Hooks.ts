/*
  Image Private Hooks.
*/

import { CSSProperties, useEffect, useState } from 'react'

import type { OptionalProps, Props } from './Component'

export type hooksReturnType = {
  firstRender: boolean
  matches: boolean
  path: string
  stylesProps: (matches: boolean) => CSSProperties
}

export const useImage = (extension: Props['extension'], props: Partial<OptionalProps>): hooksReturnType => {
  const mediaMatch = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)')
  const [firstRender, setFirstRender] = useState(true)
  const [matches, setMatches] = useState(mediaMatch && mediaMatch.matches)

  useEffect((): void | (() => void) => {
    setFirstRender(false)
    const matchesDispatch = (event: MediaQueryListEvent): void => setMatches(event.matches)

    if (mediaMatch) {
      mediaMatch.addEventListener('change', matchesDispatch)
      return (): void => mediaMatch.removeEventListener('change', matchesDispatch)
    }
  }, [mediaMatch])

  const path = extension === 'webp' ? 'webps' : 'images'

  const stylesProps = (matches: boolean): React.CSSProperties => {
    return firstRender
      ? {
          display: 'none'
        }
      : {
          display: 'block',
          width: matches ? props.desktopWidth || '100%' : props.mobileWidth || '100%',
          minWidth: matches ? props.desktopMinWidth || 'none' : props.mobileMinWidth || 'none',
          maxWidth: matches ? props.desktopMaxWidth || 'none' : props.mobileMaxWidth || 'none',
          height: matches ? props.desktopHeight || 'auto' : props.mobileHeight || 'auto',
          minHeight: matches ? props.desktopHeight || 'none' : props.mobileHeight || 'none',
          maxHeight: matches ? props.desktopMaxHeight || 'none' : props.mobileMaxHeight || 'none',
          margin: props.margin ? props.margin : matches ? props.desktopMargin || '0 auto' : props.mobileMargin || '0 auto'
        }
  }

  return { firstRender, matches, path, stylesProps }
}
