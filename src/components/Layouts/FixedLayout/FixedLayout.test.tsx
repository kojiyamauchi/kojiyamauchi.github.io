/*
  Fixed Layout Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { FixedLayout } from './'
// import userEvent from '@testing-library/user-event'

describe('Fixed Layout Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <FixedLayout pages="ui-test" currentLocation="ui-test" />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
