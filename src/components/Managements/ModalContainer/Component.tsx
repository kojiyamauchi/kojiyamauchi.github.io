/*
  Modal Container Component.
*/

import { Suspense } from 'react'
import { useModal } from './Hooks'
import { Canvas } from '@react-three/fiber'
import { ThanksForVisiting } from '@/components/Presentations/ThanksForVisiting'
import { JumpToOldPortfolio } from '@/components/Presentations/JumpToOldPortfolio'
import { DynamicComponentLinkCube } from '@/components/Presentations/LinkCube'
import { Copyright } from '@/components/Presentations/Copyright'
import styles from './style.module.scss'
import { ResizeObserver } from '@juggle/resize-observer'

export const ModalContainer: React.VFC = (): JSX.Element => {
  const { myComponent, cubesProps, generatePositionValue, openAboutMe, copyrightHover } = useModal()

  return (
    <div className={`${styles.wrapper} modal-container`} ref={myComponent}>
      <div className={`${styles['graffiti-wrapper']} graffiti-wrapper`}>
        <ThanksForVisiting copyrightHover={copyrightHover} openAboutMe={openAboutMe} />
        <JumpToOldPortfolio copyrightHover={copyrightHover} openAboutMe={openAboutMe} />
      </div>
      <div className={`${styles['canvas-wrapper']} canvas-wrapper`}>
        <Canvas resize={{ polyfill: ResizeObserver }}>
          <Suspense fallback={null}>
            <directionalLight position={[1, 1, 1]} />
            <ambientLight intensity={0.65} />
            {cubesProps.map((cubeProps, index) => (
              <DynamicComponentLinkCube
                key={index}
                textureName={cubeProps.textureName}
                linkUrl={cubeProps.linkUrl}
                positionValue={generatePositionValue[index]}
                rotate={cubeProps.rotate}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>
      <div className={`${styles['copyright-wrapper']} copyright-wrapper`}>
        <Copyright className="copyright" parent="modal" />
      </div>
    </div>
  )
}
