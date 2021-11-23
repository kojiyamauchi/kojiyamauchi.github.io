/*
  Link Cube.
*/

import dynamic from 'next/dynamic'
import { Props } from './Component'

export const DynamicComponentLinkCube = dynamic<Props>(() => import('./Component').then((component) => component.LinkCube), { ssr: false })
