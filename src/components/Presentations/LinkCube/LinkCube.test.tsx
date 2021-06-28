/*
  Link Cube Component Unit Test.
*/

import { LinkCube } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import { Suspense } from 'react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

const mockProps = {
  textureName: 'mock_texture_file',
  linkUrl: 'https://mock.com',
  positionValue: {
    x: {
      mobile: 0,
      tablet: 0,
      deskTop: 0
    },
    y: {
      mobile: 0,
      tablet: 0,
      deskTop: 0
    }
  },
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
}

describe('Link Cube Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <Suspense fallback={null}>
        <LinkCube textureName={mockProps.textureName} linkUrl={mockProps.linkUrl} positionValue={mockProps.positionValue} rotate={mockProps.rotate} />
      </Suspense>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
