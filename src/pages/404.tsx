/*
  404 Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { ErrorPageSecondaryHeading } from '@/components/Presentations/ErrorPageSecondaryHeading'
import { SEO } from '@/components/Seo'
import { PageProps } from '@/types/type'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'errorLayout',
    pages: '404'
  }
})

const Custom404: React.VFC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="404 Page" description="This is 404 Page" locationPath={router.asPath} />
      <ErrorPageSecondaryHeading letter="404 - Page Not Found" translation={true} />
    </>
  )
}

export default Custom404
