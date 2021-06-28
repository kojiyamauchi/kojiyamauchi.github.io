---
to: "src/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>"
sh: "prettier --write 'src/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>'"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir === 'Layouts') { %>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Layout Component.
*/

import { PageProps } from '@/types/type'
<% if (useStyleModule) { -%>
import styles from './style.module.scss'
<% } -%>

type Props = {
  pages: PageProps['pages']
}

export const <%= Name %>Layout: React.FC<Props> = ({ pages, children }): JSX.Element => {
  return (
    <div className={`${pages} layout <%= camelName %>-layout<%- useStyleModule ? " ${styles['wrapper']}" : '' %>`}>
      <main>{children}</main>
    </div>
  )
}
<% } else { %>
<%
  componentName = chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Managements' ? ' Container' : '' %>.
*/

export { <%= componentName %> } from './Component'
<% } %>