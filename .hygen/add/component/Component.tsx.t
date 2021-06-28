---
to: "<%= chooseOutPutDir === 'Layouts' ? null  : chooseOutPutDir === 'Managements' ? `src/components/${chooseOutPutDir}/${Name}Container/Component.tsx` : `src/components/${chooseOutPutDir}/${Name}/Component.tsx` %>"
sh: "<%= chooseOutPutDir === 'Layouts' ? null  : chooseOutPutDir === 'Managements' ? `prettier --write src/components/${chooseOutPutDir}/${Name}Container/Component.tsx` : `prettier --write src/components/${chooseOutPutDir}/${Name}/Component.tsx` %>"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir !== 'Layouts') { %>
<%
  componentName = chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component.
*/

<%- useHooks ? `import { use${h.changeCase.pascal(addHooksFnName)} } from './Hooks'` : '' %>
<% if (useStyleModule) { -%>
import styles from './style.module.scss'
<% } -%>

<% if (addPropsNumber > 0) { -%>
type Props = {
  <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
    <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>: <%- addPropsDetails[index][`addPropsType${index + 1}`] %>
  <% }) %>
}
<% } %>

export const <%= componentName %>: React.<%= chooseComponentTypes === 'Function Component' ? 'FC' : 'VFC' %><%- addPropsNumber > 0 ? '<Props>' : '' %> = (<%= addPropsNumber > 0 || chooseComponentTypes === 'Function Component' ? '{' : '' %>
  <% if (addPropsNumber > 0) { -%>
    <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
      <%= `${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])},` %>
    <% }) -%>
  <% } -%>
  <%= chooseComponentTypes === 'Function Component' ? 'children' : '' -%>
  <%= addPropsNumber > 0 || chooseComponentTypes === 'Function Component' ? '}' : '' %>): JSX.Element => {
  <% if (useHooks) { %>
  const {
    <% if (addHooksReturnTypeAlias) { -%>
      <% Array.from({ length: addHooksReturnTypeNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksReturnTypeDetails[index][`addHooksReturnTypeKey${index + 1}`])},` -%>
      <% }) -%>
  <% } else { -%>
  undefined
  <% } -%>
  } = use<%= h.changeCase.pascal(addHooksFnName) %>(
    <% if (addHooksFnArgNumber > 0) { -%>
      <% Array.from({ length: addHooksFnArgNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksFnArgDetails[index][`addHooksFnArgName${index + 1}`])},` %>
      <% }) -%>
    <% } %>
  )
  <% } %>
  return (
    <<%= wrapperTags %><%=  useStyleModule ? ' className={styles.wrapper}' : '' %>>
    <% if (addPropsNumber > 0) { -%>
      <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
        <%= `{${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])}}` %>
      <% }) -%>
    <% } -%>
    <% if (chooseComponentTypes === 'Function Component') { -%>
      { children }
    <% } %>
    </<%= wrapperTags %>>
  )
}
<% } %>