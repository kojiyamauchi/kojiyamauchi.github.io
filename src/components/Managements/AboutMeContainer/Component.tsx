/*
  About Me Container Component.
*/

import { useRouter } from 'next/router'
import { shallowEqual, useSelector } from 'react-redux'

import { AboutMe } from '@/components/Presentations/AboutMe'
import { Copyright } from '@/components/Presentations/Copyright'
import { store } from '@/ducks'
import { aboutMeToggle } from '@/ducks/AboutMe'
import { StoreTypes } from '@/types/type'

import styles from './style.module.scss'

export const closeAboutMe = (): void => void store.dispatch(aboutMeToggle({ isOpen: false }))

export const AboutMeContainer: React.VFC = (): JSX.Element => {
  const router = useRouter()
  const aboutMe = useSelector<StoreTypes, boolean>((state) => state.aboutMeStore.isOpen, shallowEqual)

  return (
    <div
      className={`${styles.wrapper} about-me-container ${aboutMe ? 'is-active' : ''}`}
      style={{ backgroundImage: `${router ? `url("${router.basePath}/webps/logo.webp")` : 'url("webps/logo.webp")'}` }}
    >
      <AboutMe closeAboutMe={closeAboutMe} />
      <div className={`${styles['copyright-wrapper']} copyright-wrapper`}>
        <Copyright className="copyright" parent="about-me" />
      </div>
    </div>
  )
}
