/*
  Loading Introduction Component.
*/

import { useRouter } from 'next/router'

import { useLoadingIntroduction } from './Hooks'
import styles from './style.module.scss'

type Props = {
  storybook?: boolean
}

export const LoadingIntroduction: React.VFC<Props> = ({ storybook = false }): JSX.Element => {
  const { loading, myComponent } = useLoadingIntroduction(storybook)
  const router = useRouter()

  return (
    <div
      ref={myComponent}
      className={`${styles.wrapper} loading-introduction ${loading ? `is-active` : ''} ${storybook ? 'is-storybook' : ''}`}
      style={{ backgroundImage: `${router ? `url("${router.basePath}/webps/shutter.webp")` : 'url("webps/shutter.webp")'}` }}
    >
      Loading
      <span className={`${styles.dot} is-first`}>.</span>
      <span className={`${styles.dot} is-second`}>.</span>
      <span className={`${styles.dot} is-third`}>.</span>
    </div>
  )
}
