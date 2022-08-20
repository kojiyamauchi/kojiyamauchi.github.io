/*
  Link Cube Component.
*/

import { DoubleSide } from 'three'

import { useLinkCube } from './Hooks'

export type Props = {
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
  rotate: {
    x: number
    y: number
    z: number
  }
  storybook?: boolean
}

export const LinkCube: React.FC<Props> = ({ textureName, linkUrl, positionValue, rotate, storybook = false }): JSX.Element => {
  const { myComponent, memorizePositionX, memorizePositionY, memorizeCubeSize, texture } = useLinkCube(textureName, positionValue, rotate, storybook)

  return (
    <mesh
      ref={myComponent}
      position={[memorizePositionX, memorizePositionY, 0]}
      onClick={(): Window | null => open(linkUrl, '_blank')}
      onPointerOver={(): string => (document.body.style.cursor = 'pointer')}
      onPointerOut={(): string => (document.body.style.cursor = 'default')}
    >
      <boxGeometry attach="geometry" args={[memorizeCubeSize, memorizeCubeSize, memorizeCubeSize]} />
      <meshPhongMaterial attach="material" map={texture} side={DoubleSide} color="#ffffff" />
    </mesh>
  )
}
