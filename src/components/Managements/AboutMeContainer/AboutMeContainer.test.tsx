/*
  About Me Container Component Unit Test.
*/

import { AboutMeContainer } from './Component'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
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
