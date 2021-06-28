/*
  Open Button.
*/

import dynamic from 'next/dynamic'
import { Props } from './Component'

export const DynamicComponentOpenButton = dynamic<Props>(() => import('./Component').then((component) => component.OpenButton), { ssr: false })
