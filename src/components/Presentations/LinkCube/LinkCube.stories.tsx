/*
  Link Cube Component Storybook.
*/

import { LinkCube } from './Component'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Link Cube Component',
  component: LinkCube
}

export default storiesInfo

const mockProps = {
  github: {
    textureName: 'github',
    linkUrl: 'https://github.com/kojiyamauchi'
  },
  storybook: {
    textureName: 'storybook',
    linkUrl: 'https://kojiyamauchi.github.io/storybook'
  },
  linkedin: {
    textureName: 'linkedin',
    linkUrl: 'https://www.linkedin.com/in/kojiyyyyamauchi/'
  },
  behance: {
    textureName: 'behance',
    linkUrl: 'https://www.behance.net/kojiyamauchi'
  },
  instagram: {
    textureName: 'instagram',
    linkUrl: 'https://www.instagram.com/kojiyamauchi/'
  },
  twitter: {
    textureName: 'twitter',
    linkUrl: 'https://twitter.com/KojiyyyYamauchi'
  },
  facebook: {
    textureName: 'facebook',
    linkUrl: 'https://www.facebook.com/kojiyyyyamauchi'
  },
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
    x: 0.015,
    y: 0.015,
    z: 0.015
  },
  storybookState: true
}

const StorybookWrapper: React.FC = ({ children }): JSX.Element => (
  <div style={{ width: '100%', height: '100vh', backgroundColor: '#000' }}>
    <Canvas>
      <Suspense fallback={null}>
        <directionalLight position={[1, 1, 1]} />
        <ambientLight intensity={0.65} />
        {children}
      </Suspense>
    </Canvas>
  </div>
)

export const github = (): JSX.Element => (
  <StorybookWrapper>
    <LinkCube
      textureName={mockProps.github.textureName}
      linkUrl={mockProps.github.linkUrl}
      positionValue={mockProps.positionValue}
      rotate={mockProps.rotate}
      storybook={mockProps.storybookState}
    />
  </StorybookWrapper>
)

export const storybook = (): JSX.Element => (
  <StorybookWrapper>
    <LinkCube
      textureName={mockProps.storybook.textureName}
      linkUrl={mockProps.storybook.linkUrl}
      positionValue={mockProps.positionValue}
      rotate={mockProps.rotate}
      storybook={mockProps.storybookState}
    />
  </StorybookWrapper>
)

export const linkedin = (): JSX.Element => (
  <StorybookWrapper>
    <LinkCube
      textureName={mockProps.linkedin.textureName}
      linkUrl={mockProps.linkedin.linkUrl}
      positionValue={mockProps.positionValue}
      rotate={mockProps.rotate}
      storybook={mockProps.storybookState}
    />
  </StorybookWrapper>
)

export const behance = (): JSX.Element => (
  <StorybookWrapper>
    <LinkCube
      textureName={mockProps.behance.textureName}
      linkUrl={mockProps.behance.linkUrl}
      positionValue={mockProps.positionValue}
      rotate={mockProps.rotate}
      storybook={mockProps.storybookState}
    />
  </StorybookWrapper>
)

export const instagram = (): JSX.Element => (
  <StorybookWrapper>
    <LinkCube
      textureName={mockProps.instagram.textureName}
      linkUrl={mockProps.instagram.linkUrl}
      positionValue={mockProps.positionValue}
      rotate={mockProps.rotate}
      storybook={mockProps.storybookState}
    />
  </StorybookWrapper>
)

export const twitter = (): JSX.Element => (
  <StorybookWrapper>
    <LinkCube
      textureName={mockProps.twitter.textureName}
      linkUrl={mockProps.twitter.linkUrl}
      positionValue={mockProps.positionValue}
      rotate={mockProps.rotate}
      storybook={mockProps.storybookState}
    />
  </StorybookWrapper>
)

export const facebook = (): JSX.Element => (
  <StorybookWrapper>
    <LinkCube
      textureName={mockProps.facebook.textureName}
      linkUrl={mockProps.facebook.linkUrl}
      positionValue={mockProps.positionValue}
      rotate={mockProps.rotate}
      storybook={mockProps.storybookState}
    />
  </StorybookWrapper>
)
