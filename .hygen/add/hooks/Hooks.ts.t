---
to: src/hooks/<%= Name %>/index.ts
sh: prettier --write 'src/hooks/<%= Name %>/index.ts'
---
<%
  camelName = h.changeCase.camel(name)
-%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Hooks.
*/

<% if (reactHooks.length > 0) { -%>
  import {<% reactHooks.forEach((info, index) => { -%>
    <%= index === 0 ? info : `,${info}` -%>
  <% }) -%>} from 'react'
<% } -%>

<% if (hooksReturnTypeAlias) { -%>
export type hooksReturnType = {
  <% Array.from({ length: hooksReturnTypeNumber }, (_info, index) => { -%>
    <%= h.changeCase.camel(hooksReturnTypeDetails[index][`hooksReturnTypeKey${index + 1}`]) %>: <%- hooksReturnTypeDetails[index][`hooksReturnTypeDetail${index + 1}`] %>
  <% }) %>
}
<% } -%>

export const use<%= Name %> = (
  <% if (hooksFnArgNumber > 0) { -%>
    <% Array.from({ length: hooksFnArgNumber }, (_info, index) => { -%>
      <%= h.changeCase.camel(hooksFnArgDetails[index][`hooksFnArgName${index + 1}`]) %>: <%- `${hooksFnArgDetails[index][`hooksFnArgType${index + 1}`]},` %>
    <% }) -%>
  <% } %>
): <%- hooksReturnTypeAlias ? 'hooksReturnType' : hooksReturnTypeAnnotation ? hooksReturnTypeAnnotation : 'undefined' %> => {
  <% if (hooksReturnTypeAlias) { -%>
    return { <% Array.from({ length: hooksReturnTypeNumber }, (_info, index) => { -%>
      <%= `${h.changeCase.camel(hooksReturnTypeDetails[index][`hooksReturnTypeKey${index + 1}`])},` -%>
    <% }) -%>}
  <% } else { -%>
  return undefined
<% } %>
}
