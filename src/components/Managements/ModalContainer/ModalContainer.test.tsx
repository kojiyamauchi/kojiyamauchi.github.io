/**
 * @jest-environment jsdom
 */
/*
  Modal Container Component Unit Test.
*/

import { ModalContainer } from './Component'
import { Provider } from 'react-redux'
import { store } from '@/ducks'
import { modalToggle } from '@/ducks/Modal'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'
// import { renderHook } from '@testing-library/react-hooks/dom/'

describe('Modal Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('Operation Testing', () => {
    const { container } = render(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
    )
    act(() => void store.dispatch(modalToggle({ isOpen: true })))
    expect(container.firstChild).toHaveClass('is-display')
    expect(container.firstChild).toHaveClass('is-active')
    act(() => void store.dispatch(modalToggle({ isOpen: false })))
    expect(container.firstChild).not.toHaveClass('is-active')
  })
})
