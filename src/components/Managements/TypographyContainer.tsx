/*
  Typography Container.
*/

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Typography } from '@/components/Presentations/Typography'
import { SubLetter } from '@/components/Presentations/SubLetter'
import styled from 'styled-components'
// import { BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  visited: boolean
}

const TypographyContainerComponent: React.VFC<Props> = ({ className, visited }): JSX.Element => {
  const [countUp, setCountUp] = useState(0)
  const myComponent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const strokeLengthArr = Array.from(myComponent.current!.firstElementChild!.querySelectorAll('.draw-typography'), (selector): number | undefined => {
      if (selector instanceof SVGPathElement) return selector.getTotalLength()
      return undefined
    })

    const average = strokeLengthArr.reduce((accumulator, current) => (accumulator! += current!), 0)! / strokeLengthArr.length

    const typographyFn = () => {
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

    const subLetterFn = () => myComponent.current!.lastElementChild!.classList.add('is-active')

    !visited && countUp >= 1 && countUp <= 29 ? typographyFn() : countUp === 30 && subLetterFn()

    const timeID = setTimeout(
      () => setCountUp(countUp + 1),
      /* eslint-disable */
      countUp === 0
        ? window.innerWidth <= 768
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
      /* eslint-enable */
    )

    if (countUp === 30) clearTimeout(timeID)

    return () => clearTimeout(timeID)
  }, [countUp, visited])

  return (
    <div className={`${className} typography-container`} ref={myComponent}>
      <Typography visited={visited} />
      <SubLetter visited={visited} />
    </div>
  )
}

const StyledComponent = styled(TypographyContainerComponent)`
  transform: translateY(40%);
`

export const TypographyContainer = StyledComponent
