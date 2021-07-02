/*
  Logo Model.
*/

import dynamic from 'next/dynamic'
// import { Props } from './Component'

export const DynamicComponentLogoModel = dynamic<unknown>(() => import('./Component').then((component) => component.LogoModel), { ssr: false })
