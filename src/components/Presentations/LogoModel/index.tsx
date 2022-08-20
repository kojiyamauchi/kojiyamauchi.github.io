/*
  Logo Model.
*/

import dynamic from 'next/dynamic'

export const DynamicComponentLogoModel = dynamic(() => import('./Component'), { ssr: false })
