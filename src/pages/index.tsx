/*
  Top Page.
  In 'getStaticPaths' && 'getStaticProps',
  When the File Does Not Exist in the Specified Path.
  'getStaticPaths' API's 'fallback' are...
  fallback: false -> 404.
  fallback: true -> CSR && SSR on Background, The Second and Subsequent Accesses Return SSR Cache.
  fallback: blocking -> SSR && The Second and Subsequent Accesses Return SSR Cache.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { TypographyContainer } from '@/components/Managements/TypographyContainer'
import { DynamicComponentLogoModel } from '@/components/Presentations/LogoModel'
import { SEO } from '@/components/Seo'
import { firstVisitToggle } from '@/ducks/FirstVisit'
import { PageProps } from '@/types/type'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: 'primary'
  }
})

const PrimaryPage: React.VFC = (): JSX.Element => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    return (): void => void dispatch(firstVisitToggle({ isVisited: true }))
  })

  return (
    <>
      <SEO locationPath={router.asPath} />
      <TypographyContainer />
      <DynamicComponentLogoModel />
    </>
  )
}

export default PrimaryPage
