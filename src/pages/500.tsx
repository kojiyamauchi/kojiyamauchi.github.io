/*
  500 Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { ErrorPageSecondaryHeading } from '@/components/Presentations/ErrorPageSecondaryHeading'
import { SEO } from '@/components/Seo'
import { PageProps } from '@/types/type'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'errorLayout',
    pages: '500'
  }
})

const Custom500: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="500 Page" description="This is 500 Page" locationPath={router.asPath} />
      <ErrorPageSecondaryHeading letter="500 - Server Side Error Occurred" translation={true} />
    </>
  )
}

export default Custom500
