/*
  Layout
*/

import { FixedLayout } from '@/components/Layouts/FixedLayout'
import { ErrorLayout } from '@/components/Layouts/ErrorLayout'
import { PageProps } from '@/types/type'

type Props = {
  pageProps: PageProps
  currentLocation?: string
}

const switchComponent = (
  chooseLayout: PageProps['chooseLayout'],
  pages: PageProps['pages'],
  children: React.ReactNode,
  currentLocation?: string
): JSX.Element => {
  switch (chooseLayout) {
    case 'fixedLayout':
      return (
        <FixedLayout pages={pages} currentLocation={currentLocation}>
          {children}
        </FixedLayout>
      )
    case 'errorLayout':
      return <ErrorLayout pages={pages}>{children}</ErrorLayout>
  }
}

export const Layout: React.FC<Props> = ({ pageProps, children, currentLocation }): JSX.Element => {
  return switchComponent(pageProps.chooseLayout, pageProps.pages, children, currentLocation)
}
