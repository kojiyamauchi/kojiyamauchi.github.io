/**
 * @jest-environment jsdom
 */
/*
  Button Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { ButtonContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Button Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ButtonContainer />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})