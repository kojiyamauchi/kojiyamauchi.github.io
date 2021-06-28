---
to: src/hooks/<%= Name %>/<%= Name %>.test.ts
sh: prettier --write 'src/hooks/<%= Name %>/<%= Name %>.test.ts'
---
<%
  camelName = h.changeCase.camel(name)
-%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Hooks Unit Test.
*/

import { use<%= Name %> } from './'
import { renderHook /* , act*/ } from '@testing-library/react-hooks/dom'

beforeAll(() => {})
beforeEach(() => {})

describe('<%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Hooks Each Function Unit Test', () => {
  it('TBD', () => {})
})

describe('<%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Hooks Unit Test', () => {
  it('TBD', () => {
    const { result } = renderHook(() => use<%= Name %>(
      <% if (hooksFnArgNumber > 0) { -%>
        <% Array.from({ length: hooksFnArgNumber }, (_info, index) => { -%>
          <%= `${h.changeCase.camel(hooksFnArgDetails[index][`hooksFnArgName${index + 1}`])},` %>
        <% }) -%>
      <% } %>
    ))
    expect(result.current)
  })
})

afterEach(() => {})
afterAll(() => {})
