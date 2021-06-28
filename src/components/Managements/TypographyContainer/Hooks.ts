/*
  Typography Container Private Hooks.
*/

import { useState, useEffect, useRef, RefObject } from 'react'
import { gsap } from 'gsap'

export type hooksReturnType = {
  myComponent: RefObject<HTMLDivElement>
}

export const useTypography = (visited: boolean): hooksReturnType => {
  const [countUp, setCountUp] = useState(0)
  const myComponent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const strokeLengthArr = Array.from(myComponent.current!.firstElementChild!.querySelectorAll('.draw-typography'), (selector): number | undefined => {
      return selector instanceof SVGPathElement ? selector.getTotalLength() : undefined
    })

    const average = strokeLengthArr.reduce((accumulator, current) => (accumulator! += current!), 0)! / strokeLengthArr.length

    const typographyFn = (): void => {
      requestAnimationFrame(() => {
        gsap.fromTo(
          `#${myComponent.current!.firstElementChild!.id} .path-${countUp}`,
          {
            strokeDashoffset: strokeLengthArr[countUp - 1]!,
            strokeDasharray: strokeLengthArr[countUp - 1]!,
            visibility: 'hidden'
          },
          {
            strokeDashoffset: 0,
            visibility: 'visible',
            duration: countUp <= 24 ? average / 500 : average / 200
          }
        )
      })
    }

    const subLetterFn = (): void => myComponent.current!.lastElementChild!.classList.add('is-active')

    !visited && countUp >= 1 && countUp <= 29 ? typographyFn() : countUp === 30 && subLetterFn()

    const timeID = setTimeout(
      () => setCountUp(countUp + 1),
      countUp === 0
        ? window.innerWidth <= 767
          ? 0
          : 1250
        : countUp === 1
        ? 300
        : countUp > 1 && countUp < 24
        ? 275
        : countUp === 24
        ? 2050
        : countUp > 24 && countUp < 29
        ? 350
        : 300
    )

    if (countUp === 30) clearTimeout(timeID)

    return (): void => clearTimeout(timeID)
  }, [countUp, visited])

  return { myComponent }
}
