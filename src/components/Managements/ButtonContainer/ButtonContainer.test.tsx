/*
  Button Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { act, render /* ,screen */ } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { ButtonContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Button Container Component Unit Test', () => {
  it('Snap Shot Testing', async () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ButtonContainer />
      </Provider>
    )
    await act(() => {
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
