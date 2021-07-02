/*
  Logo Model.
*/

import dynamic from 'next/dynamic'

export const DynamicComponentLogoModel = dynamic<unknown>(() => import('./Component').then((component) => component.LogoModel), { ssr: false })
