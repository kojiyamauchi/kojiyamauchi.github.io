/**
 * @jest-environment jsdom
 */
/*
  Loading Introduction Component Unit Test.
*/

import { LoadingIntroduction } from './Component'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
import { render /* ,act,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
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
