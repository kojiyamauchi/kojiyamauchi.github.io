/**
 * @jest-environment jsdom
 */
/*
  Typography Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'
import { firstVisitToggle } from '@/ducks/FirstVisit'

import { TypographyContainer } from './Component'
// import userEvent from '@testing-library/user-event'

/* eslint-disable @typescript-eslint/no-explicit-any */
// jsdom does not have a type definition for SVGPathElement.🔍
class SVGPathElement extends HTMLElement {}
;(global as any).SVGPathElement = SVGPathElement
/* eslint-enable */

describe('Typography Container Component Unit Test', () => {
  it('Snap Shot Testing', async () => {
    store.dispatch(firstVisitToggle({ isVisited: true }))
    const { asFragment } = render(
      <Provider store={store}>
        <TypographyContainer />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
