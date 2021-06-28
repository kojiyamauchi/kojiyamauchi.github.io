/*
  Next.js uses the App component to initialize pages.
  You can override it and control the page initialization.
  Which allows you to do amazing things like:
  Persisting layout between page changes
  Keeping state when navigating pages
  Custom error handling using componentDidCatch
  Inject additional data into pages
  Add global CSS

  Through 'Component: NextComponentType',
  Expanded to Each Page Component.

  Basically, Global State Management is Inject in Here.
*/
import { NextComponentType, NextPageContext } from 'next'
import { Router } from 'next/router'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
import { PageProps } from '@/types/type'
import { Layout } from '@/components/Layouts'
import '@/styles/default.scss'

type AppProps = {
  Component: NextComponentType<NextPageContext, unknown, PageProps>
  pageProps: PageProps
  router: Router
}

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Layout pageProps={pageProps} currentLocation={router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
