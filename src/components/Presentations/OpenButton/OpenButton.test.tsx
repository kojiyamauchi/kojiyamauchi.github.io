/**
 * @jest-environment jsdom
 */
/*
  Open Button Component Unit Test.
*/

import { OpenButton } from './Component'
import { FixedLayout } from '@/components/Layouts/FixedLayout'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Open Button Component Unit Test', () => {
  it('Snap Shot Testing', () => {
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
    expect(asFragment()).toMatchSnapshot()
  })
})
