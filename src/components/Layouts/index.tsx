/*
  Layout
*/

import { ErrorLayout } from '@/components/Layouts/ErrorLayout'
import { FixedLayout } from '@/components/Layouts/FixedLayout'
import { PageProps } from '@/types/type'

type Props = {
  pageProps: PageProps
  currentLocation?: string
  loading: React.ReactNode
  children?: React.ReactNode
}

const switchComponent = (
  chooseLayout: PageProps['chooseLayout'],
  pages: PageProps['pages'],
  children: React.ReactNode,
  currentLocation?: string,
  loading?: React.ReactNode
): JSX.Element => {
  switch (chooseLayout) {
    case 'fixedLayout':
      return (
        <FixedLayout pages={pages} currentLocation={currentLocation} loading={loading}>
          {children}
        </FixedLayout>
      )
    case 'errorLayout':
      return <ErrorLayout pages={pages}>{children}</ErrorLayout>
  }
}

export const Layout: React.FC<Props> = ({ pageProps, children, currentLocation, loading }): JSX.Element => {
  return switchComponent(pageProps.chooseLayout, pageProps.pages, children, currentLocation, loading)
}
