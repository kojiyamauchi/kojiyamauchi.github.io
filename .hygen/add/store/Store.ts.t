---
to: src/ducks/<%= Name %>/index.ts
sh: prettier --write 'src/ducks/<%= Name %>/index.ts'
---
<%
  camelName = h.changeCase.camel(name)
%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %> Store.
*/
import { createAction, createReducer } from '@reduxjs/toolkit'
import { <%= Name %>Types } from '@/types/type'

<% if (typeOfInitialState === 'undefined') {%>
  const initialState = {} as <%= Name %>Types
<% } %>

<% if (typeOfInitialState === 'define' && !typeHasPartial) {%>
  const initialState: <%= Name %>Types = {
    <%= addState %>
  }
<% } %>

<% if (typeOfInitialState === 'define' && typeHasPartial) {%>
  const initialState: Partial<<%= Name %>Types> = {
    <%= addState %>
  }
<% } %>

<% if (actionNumber > 0) { -%>
  <% Array.from({ length: actionNumber }, (_info, index) => { -%>
    export const <%= camelName %><%= h.changeCase.pascal(actionDetails[index][`actionName${index + 1}`]) %> = createAction<%- actionDetails[index][`actionPayload${index + 1}`] === 'Same as state type' ? '<' + Name + 'Types, ' + "'" + camelName + '/' + h.changeCase.camel(actionDetails[index][`actionName${index + 1}`]) + "'" + '>' : actionDetails[index][`actionPayload${index + 1}`] === 'None' ? '' : '<' + actionDetails[index][`actionPayload${index + 1}`] + ', ' + "'" + camelName + '/' + h.changeCase.camel(actionDetails[index][`actionName${index + 1}`]) + "'" + '>'  %>('<%= camelName %>/<%= h.changeCase.camel(actionDetails[index][`actionName${index + 1}`]) %>')
  <% }) %>
<% } %>

export const <%= camelName %>Reducer = createReducer(initialState, (builder) => {
  builder
  <% if (actionNumber > 0) { -%>
    <% Array.from({ length: actionNumber }, (_info, index) => { -%>
      <% if (h.changeCase.camel(actionDetails[index][`actionName${index + 1}`]) !== 'initialize') { -%>
        .addCase(<%= camelName %><%= h.changeCase.pascal(actionDetails[index][`actionName${index + 1}`]) %>, (state<%- actionDetails[index][`actionPayload${index + 1}`] === 'None' ? '' : ',  action'%>) => {
          return { ...state<%- actionDetails[index][`actionPayload${index + 1}`] === 'None' ? '' : ', ...action.payload'%> }
        })
      <% } else { -%>
        .addCase(<%= camelName %><%= h.changeCase.pascal(actionDetails[index][`actionName${index + 1}`]) %>, () => {
          return initialState
        })
      <% } -%>
    <% }) %>
  <% } %>
})