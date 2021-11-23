---
to: src/ducks/<%= Name %>/<%= Name %>.test.ts
sh: prettier --write 'src/ducks/<%= Name %>/<%= Name %>.test.ts'
---
<%
  camelName = h.changeCase.camel(name)
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Store Unit Test.
*/

import { store } from '@/ducks'
import { <% if (actionNumber > 0) { -%>
  <% Array.from({ length: actionNumber }, (_info, index) => { -%>
    <%= camelName %><%= h.changeCase.pascal(actionDetails[index][`actionName${index + 1}`]) -%>,
  <% }) -%>
<% } -%> } from '@/ducks/<%= Name %>'

beforeAll(() => {})
beforeEach(() => {})

describe('<%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Store Unit Test', () => {
  <% if (actionNumber > 0) { -%>
    <% Array.from({ length: actionNumber }, (_info, index) => { -%>
      it(`<%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Store’s Details of Some Test.`, () => {
        store.dispatch(<%= camelName %><%= h.changeCase.pascal(actionDetails[index][`actionName${index + 1}`]) %>({}))
        expect(store.getState().<%= camelName %>Store)
      })
    <% }) %>
  <% } %> 
})

afterEach(() => {})
afterAll(() => {})

