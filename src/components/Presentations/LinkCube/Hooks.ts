/*
  Link Cube Private Hooks.
*/

import { useState, useEffect, useRef, useMemo, RefObject } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import type { Props } from './Component'

export const generatePosition = (mobile: number, tablet: number, deskTop: number): number => {
  const mobilePosition = mobile
  const tabletPosition = tablet
  const deskTopPosition = deskTop
  const result = window.innerWidth <= 767 ? mobilePosition : window.innerWidth >= 768 && window.innerWidth <= 1024 ? tabletPosition : deskTopPosition
  return result
}

export const generateCubeSize = (storybook: boolean): number => {
  const result = !storybook ? (window.innerWidth <= 1024 ? 0.5 : 0.6) : window.innerWidth <= 1024 ? 1.4 : 1.5
  return result
}

export type hooksReturnType = {
  myComponent: RefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>
  memorizePositionX: number
  memorizePositionY: number
  memorizeCubeSize: number
  texture: THREE.Texture
}

export const useLinkCube = (textureName: string, positionValue: Props['positionValue'], rotate: Props['rotate'], storybook: boolean): hooksReturnType => {
  const myComponent = useRef<THREE.Mesh>(null)
  const [positionX, setPositionX] = useState(generatePosition(positionValue.x.mobile, positionValue.x.tablet, positionValue.x.deskTop))
  const [positionY, setPositionY] = useState(generatePosition(positionValue.y.mobile, positionValue.y.tablet, positionValue.y.deskTop))
  const [cubeSize, setCubeSize] = useState(generateCubeSize(storybook))
  const texture = useLoader(THREE.TextureLoader, `${process.env.basePath ? process.env.basePath : ''}/images/texture_${textureName}.png`)

  useFrame(() => {
    myComponent.current!.rotation.x += rotate.x
    myComponent.current!.rotation.y += rotate.y
    myComponent.current!.rotation.z += rotate.z
  })

  useEffect(() => {
    window.addEventListener('resize', () => setPositionX(generatePosition(positionValue.x.mobile, positionValue.x.tablet, positionValue.x.deskTop)))
  }, [positionValue.x.deskTop, positionValue.x.mobile, positionValue.x.tablet, positionX])

  useEffect(() => {
    window.addEventListener('resize', () => setPositionY(generatePosition(positionValue.y.mobile, positionValue.y.tablet, positionValue.y.deskTop)))
  }, [positionValue.y.deskTop, positionValue.y.mobile, positionValue.y.tablet, positionY])

  useEffect(() => {
    window.addEventListener('resize', () => setCubeSize(generateCubeSize(storybook)))
  }, [cubeSize, storybook])

  const memorizePositionX = useMemo(() => positionX, [positionX])
  const memorizePositionY = useMemo(() => positionY, [positionY])
  const memorizeCubeSize = useMemo(() => cubeSize, [cubeSize])

  return { myComponent, memorizePositionX, memorizePositionY, memorizeCubeSize, texture }
}