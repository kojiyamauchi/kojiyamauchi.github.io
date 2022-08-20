/*
  About Me Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '@/ducks'

import { AboutMeContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('About Me Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <AboutMeContainer />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
