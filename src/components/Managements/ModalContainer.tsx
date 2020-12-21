/*
  Modal Container.
*/

import { useRef, useEffect, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { NoContent } from '@/components/Presentations/NoContent'
import { JumpToOldPortfolio } from '@/components/Presentations/JumpToOldPortfolio'
import { LinkCube } from '@/components/Presentations/LinkCube'
import { Copyright } from '@/components/Presentations/Copyright'
import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

const cubeProps = [
  {
    textureName: 'github',
    linkUrl: 'https://github.com/kojiyamauchi',
    positionValue: {
      x: {
        mobileMin: -1.125,
        mobileMax: -0.875,
        tabletMin: -2.25,
        tabletMax: -2,
        deskTopMin: -4,
        deskTopMax: -3
      },
      y: {
        mobileMin: 2.75,
        mobileMax: 3,
        tabletMin: 1.25,
        tabletMax: 1.75,
        deskTopMin: 1.5,
        deskTopMax: 2.5
      }
    }
  },
  {
    textureName: 'linkedin',
    linkUrl: 'https://www.linkedin.com/in/kojiyyyyamauchi/',
    positionValue: {
      x: {
        mobileMin: -0.125,
        mobileMax: 0.125,
        tabletMin: -2.25,
        tabletMax: -2,
        deskTopMin: -4,
        deskTopMax: -3
      },
      y: {
        mobileMin: 2.75,
        mobileMax: 3,
        tabletMin: -0.25,
        tabletMax: 0.25,
        deskTopMin: -0.5,
        deskTopMax: 0.5
      }
    }
  },
  {
    textureName: 'behance',
    linkUrl: 'https://www.behance.net/kojiyamauchi',
    positionValue: {
      x: {
        mobileMin: 0.875,
        mobileMax: 1.125,
        tabletMin: -2.25,
        tabletMax: -2,
        deskTopMin: -4,
        deskTopMax: -3
      },
      y: {
        mobileMin: 2.75,
        mobileMax: 3,
        tabletMin: -1.75,
        tabletMax: -1.25,
        deskTopMin: -2.5,
        deskTopMax: -1.5
      }
    }
  },
  {
    textureName: 'instagram',
    linkUrl: 'https://www.instagram.com/kojiyamauchi/',
    positionValue: {
      x: {
        mobileMin: -1.125,
        mobileMax: -0.875,
        tabletMin: 2,
        tabletMax: 2.25,
        deskTopMin: 3,
        deskTopMax: 4
      },
      y: {
        mobileMin: 1.625,
        mobileMax: 1.875,
        tabletMin: 1.25,
        tabletMax: 1.75,
        deskTopMin: 1.5,
        deskTopMax: 2.5
      }
    }
  },
  {
    textureName: 'twitter',
    linkUrl: 'https://twitter.com/KojiyyyYamauchi',
    positionValue: {
      x: {
        mobileMin: -0.125,
        mobileMax: 0.125,
        tabletMin: 2,
        tabletMax: 2.25,
        deskTopMin: 3,
        deskTopMax: 4
      },
      y: {
        mobileMin: 1.625,
        mobileMax: 1.875,
        tabletMin: -0.25,
        tabletMax: 0.25,
        deskTopMin: -0.5,
        deskTopMax: 0.5
      }
    }
  },
  {
    textureName: 'facebook',
    linkUrl: 'https://www.facebook.com/kojiyyyyamauchi',
    positionValue: {
      x: {
        mobileMin: 0.875,
        mobileMax: 1.125,
        tabletMin: 2,
        tabletMax: 2.25,
        deskTopMin: 3,
        deskTopMax: 4
      },
      y: {
        mobileMin: 1.625,
        mobileMax: 1.875,
        tabletMin: -1.75,
        tabletMax: -1.25,
        deskTopMin: -2.5,
        deskTopMax: -1.5
      }
    }
  }
]

const generateDeviceValue = (
  mobileMin: number,
  mobileMax: number,
  tabletMin: number,
  tabletMax: number,
  deskTopMin: number,
  deskTopMax: number
): { mobile: number; tablet: number; deskTop: number } => {
  const mobile = Math.random() * (mobileMax - mobileMin) + mobileMin
  const tablet = Math.random() * (tabletMax - tabletMin) + tabletMin
  const deskTop = Math.random() * (deskTopMax - deskTopMin) + deskTopMin
  return { mobile, tablet, deskTop }
}

const generatePositionValue = cubeProps.map((info) => {
  const x = generateDeviceValue(
    info.positionValue.x.mobileMin,
    info.positionValue.x.mobileMax,
    info.positionValue.x.tabletMin,
    info.positionValue.x.tabletMax,
    info.positionValue.x.deskTopMin,
    info.positionValue.x.deskTopMax
  )
  const y = generateDeviceValue(
    info.positionValue.y.mobileMin,
    info.positionValue.y.mobileMax,
    info.positionValue.y.tabletMin,
    info.positionValue.y.tabletMax,
    info.positionValue.y.deskTopMin,
    info.positionValue.y.deskTopMax
  )
  return { x, y }
})

const generatePosition = (mobile: number, tablet: number, deskTop: number) => {
  const mobilePosition = mobile
  const tabletPosition = tablet
  const deskTopPosition = deskTop
  /* eslint-disable */
  const result =
    typeof window !== 'undefined' && window.innerWidth <= 768
      ? mobilePosition
      : typeof window !== 'undefined' && window.innerWidth > 768 && window.innerWidth <= 1024
      ? tabletPosition
      : deskTopPosition
  /* eslint-enable */
  let value = result
  typeof window !== 'undefined' && window.addEventListener('resize', () => (value = result))
  return value
}

const generateCubeSize = () => {
  const result = typeof window !== 'undefined' && window.innerWidth <= 1024 ? 0.5 : 0.6
  let value = result
  typeof window !== 'undefined' && window.addEventListener('resize', () => (value = result))
  return value
}

const generateRotateDuration = () => Math.random() * (0.02 - 0.01) + 0.01

const switchGraffiti = (myComponentCurrent: HTMLDivElement) => {
  myComponentCurrent.querySelector('.copyright')?.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
      myComponentCurrent.querySelector('.no-content')?.classList.remove('is-active')
      myComponentCurrent.querySelector('.jump-old-portfolio')?.classList.add('is-active')
    }
  })
  myComponentCurrent.querySelector('.copyright')?.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
      myComponentCurrent.querySelector('.no-content')?.classList.add('is-active')
      myComponentCurrent.querySelector('.jump-old-portfolio')?.classList.remove('is-active')
    }
  })
}

type Props = {
  className?: string
  switchModal: (myComponent: HTMLDivElement) => void
}

const ModalContainerComponent: React.VFC<Props> = ({ className, switchModal }): JSX.Element => {
  const myComponent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    switchModal(myComponent.current!)
    switchGraffiti(myComponent.current!)
    return () => {}
  })

  return (
    <div className={`${className} modal-container`} ref={myComponent}>
      <div className="graffiti-wrapper">
        <NoContent className="no-content is-active" />
        <JumpToOldPortfolio className="jump-old-portfolio" />
      </div>
      <div className="canvas-wrapper">
        <Canvas>
          <Suspense fallback={null}>
            <directionalLight position={[1, 1, 1]} />
            <ambientLight intensity={0.65} />
            {cubeProps.map((info, index) => (
              <LinkCube
                key={index}
                textureName={info.textureName}
                linkUrl={info.linkUrl}
                positionValue={generatePositionValue[index]}
                positionFn={generatePosition}
                cubeSize={generateCubeSize}
                rotateX={generateRotateDuration()}
                rotateY={generateRotateDuration()}
                rotateZ={generateRotateDuration()}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>
      <div className="copyright-wrapper">
        <Copyright className="copyright" parent="modal" />
      </div>
    </div>
  )
}

const StyledComponent = styled(ModalContainerComponent)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in;
  will-change: visibility, opacity;
  ${BreakPoint.largeMobile` align-items: center; `}

  &.is-active {
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease-out 0.5s;
  }

  .graffiti-wrapper {
    width: 100%;
    max-width: 300px;
    transform: translateY(35px);
    position: relative;
    ${BreakPoint.smallMobile` transform: translateY(70px); `}
    ${BreakPoint.largeMobile` max-width: 500px; `}
    ${BreakPoint.largeMobile` transform: none; `}
    ${BreakPoint.extraLargeDesktop` max-width: 700px; `}
  }

  .no-content {
    visibility: hidden;

    &.is-active {
      visibility: visible;
    }
  }

  .jump-old-portfolio {
    visibility: hidden;

    &.is-active {
      visibility: visible;
    }
  }

  .canvas-wrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .copyright-wrapper {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 100;
    margin: auto;
  }
`

export const ModalContainer = StyledComponent
