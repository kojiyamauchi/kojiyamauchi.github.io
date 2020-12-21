/*
  Link Cube.
*/

import { useRef } from 'react'
import { withPrefix } from 'gatsby'
import * as THREE from 'three'
import { useFrame, useLoader } from 'react-three-fiber'

type Props = {
  textureName: string
  linkUrl: string
  positionValue: {
    x: {
      mobile: number
      tablet: number
      deskTop: number
    }
    y: {
      mobile: number
      tablet: number
      deskTop: number
    }
  }
  positionFn: (mobile: number, tablet: number, deskTop: number) => number
  cubeSize: () => number
  rotateX: number
  rotateY: number
  rotateZ: number
}

export const LinkCube: React.VFC<Props> = ({ textureName, linkUrl, positionValue, positionFn, cubeSize, rotateX, rotateY, rotateZ }): JSX.Element => {
  const ref = useRef({} as THREE.Mesh)
  const texture = useLoader(THREE.TextureLoader, withPrefix(`/texture_${textureName}.png`))

  useFrame(() => {
    ref.current!.rotation.x += rotateX
    ref.current!.rotation.y += rotateY
    ref.current!.rotation.z += rotateZ
  })

  return (
    <mesh
      position={[
        positionFn(positionValue.x.mobile, positionValue.x.tablet, positionValue.x.deskTop),
        positionFn(positionValue.y.mobile, positionValue.y.tablet, positionValue.y.deskTop),
        0
      ]}
      ref={ref}
      onClick={() => open(linkUrl, '_blank')}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'default')}
    >
      <boxGeometry attach="geometry" args={[cubeSize(), cubeSize(), cubeSize()]} />
      <meshPhongMaterial attach="material" map={texture} side={THREE.DoubleSide} color="#ffffff" />
    </mesh>
  )
}
