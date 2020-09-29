/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, Children, isValidElement, cloneElement, useState, useRef, useEffect } from 'react'
import { ModalContainer } from '@/components/Managements/ModalContainer'
import { FooterContainer } from '@/components/Managements/FooterContainer'
import { OpenButton } from '@/components/Presentations/OpenButton'
import { CloseButton } from '@/components/Presentations/CloseButton'
// import { LinkGitHub } from '@/components/Presentations/Reserve/LinkGitHub'
import styled from 'styled-components'
import { GlobalStyle } from '@/styles/StyleGlobal'

type Props = {
  children: ReactNode
  className?: string
  currentLocation: string
}

const LayoutComponent: React.FC<Props> = ({ className, children, currentLocation }): JSX.Element => {
  const [stateGlobalMenu, setStateGlobalMenu] = useState(false)
  const myComponent = useRef<HTMLDivElement>(null)

  const childrenWithProps = Children.map(children, (child) => {
    return isValidElement(child) && cloneElement(child, { location: currentLocation })
  })

  const switchGlobalMenu = {
    showOpenButton: (myComponentCurrent: HTMLDivElement): void => {
      if (!stateGlobalMenu) myComponentCurrent.classList.add('is-active')
    },
    hideOpenButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      if (event.currentTarget instanceof HTMLElement) event.currentTarget!.classList.remove('is-active')
      setStateGlobalMenu(true)
    },
    showCloseButton: (myComponentCurrent: HTMLDivElement): void => {
      if (stateGlobalMenu) myComponentCurrent.classList.add('is-active')
    },
    hideCloseButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      if (event.currentTarget instanceof HTMLElement) event.currentTarget!.classList.remove('is-active')
      setStateGlobalMenu(false)
    },
    switchModal: (myComponentCurrent: HTMLDivElement): void => {
      stateGlobalMenu ? myComponentCurrent.classList.add('is-active') : myComponentCurrent.classList.remove('is-active')
    },
    switchBlur: (myComponentCurrent: HTMLDivElement): void => {
      stateGlobalMenu ? myComponentCurrent.classList.add('is-blur') : myComponentCurrent.classList.remove('is-blur')
    }
  }

  useEffect(() => {
    switchGlobalMenu.switchBlur(myComponent.current!)
    return () => {}
  })

  return (
    <div className={className} ref={myComponent}>
      <GlobalStyle />
      {childrenWithProps}
      {/* <LinkGitHub /> */}
      <OpenButton showOpenButton={switchGlobalMenu.showOpenButton} hideOpenButton={switchGlobalMenu.hideOpenButton} />
      <CloseButton showCloseButton={switchGlobalMenu.showCloseButton} hideCloseButton={switchGlobalMenu.hideCloseButton} />
      <ModalContainer switchModal={switchGlobalMenu.switchModal} />
      <FooterContainer />
    </div>
  )
}

const StyledComponent = styled(LayoutComponent)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  > *:not(.open-button):not(.close-button):not(.modal-container) {
    filter: blur(0);
    transition: filter 0.5s ease-in;
    will-change: filter;
  }

  &.is-blur {
    > *:not(.open-button):not(.close-button):not(.modal-container) {
      filter: blur(5px);
      transition: filter 0.5s ease-out 0.5s;
    }
  }
`

export const Layout = StyledComponent
