/*
  Open Button Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { act, render /* ,screen */ } from '@testing-library/react'
import { Provider } from 'react-redux'

import { FixedLayout } from '@/components/Layouts/FixedLayout'
import { store } from '@/ducks'

import { OpenButton } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Open Button Component Unit Test', () => {
  it('Snap Shot Testing', async () => {
    const mockFn = jest.fn()
    render(
      <Provider store={store}>
        <FixedLayout pages="ui-test" />
      </Provider>
    )
    const { asFragment } = render(
      <Provider store={store}>
        <OpenButton modalState={false} modalOpen={mockFn} storybook={false} uiTest={true} />
      </Provider>
    )
    await act(() => {
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
