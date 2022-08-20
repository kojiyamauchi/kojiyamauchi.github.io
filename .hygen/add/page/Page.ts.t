---
to: src/pages/<%= name %>.tsx
sh: prettier --write 'src/pages/<%= name %>.tsx'
---
<%
  camelComponentName = h.changeCase.camel(componentName)
  pascalComponentName = h.changeCase.pascal(componentName)
%>
/*
  <%= pascalComponentName.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Page.
  In 'getStaticPaths' && 'getStaticProps',
  When the File Does Not Exist in the Specified Path.
  'getStaticPaths' API's 'fallback' are...
  fallback: false -> 404.
  fallback: true -> CSR && SSR on Background, The Second and Subsequent Accesses Return SSR Cache.
  fallback: blocking -> SSR && The Second and Subsequent Accesses Return SSR Cache.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: '<%= chooseLayout %>',
    pages: '<%= componentName %>'
  }
})

const <%= pascalComponentName %>Page: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO <%- pageTitle ? `title="${pageTitle}" ` : '' %><%- pageDescription ? `description="${pageDescription}" ` : '' %>locationPath={router.asPath} />
    </>
  )
}

export default <%= pascalComponentName %>Page

