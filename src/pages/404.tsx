/*
  404 Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'
import { ErrorPageSecondaryHeading } from '@/components/Presentations/ErrorPageSecondaryHeading'

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
