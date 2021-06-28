/*
  Top Page.
  In 'getStaticPaths' && 'getStaticProps',
  When the File Does Not Exist in the Specified Path.
  'getStaticPaths' API's 'fallback' are...
  fallback: false -> 404.
  fallback: true -> CSR && SSR on Background, The Second and Subsequent Accesses Return SSR Cache.
  fallback: blocking -> SSR && The Second and Subsequent Accesses Return SSR Cache.
*/

import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'
import { TypographyContainer } from '@/components/Managements/TypographyContainer'
import { DynamicComponentLogoModel } from '@/components/Presentations/LogoModel'

let visited = false

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: 'primary'
  }
})

const PrimaryPage: React.VFC = (): JSX.Element => {
  const router = useRouter()

  useEffect(() => void (visited = true))

  return (
    <>
      <SEO locationPath={router.asPath} />
      <TypographyContainer visited={visited} />
      <DynamicComponentLogoModel visited={visited} />
    </>
  )
}

export default PrimaryPage
