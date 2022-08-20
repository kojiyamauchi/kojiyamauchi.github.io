/*
  Loading Introduction Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,act,screen */ } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { LoadingIntroduction } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Loading Introduction Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <LoadingIntroduction />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
