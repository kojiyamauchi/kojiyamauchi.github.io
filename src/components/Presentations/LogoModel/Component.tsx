/*
  Logo Model Component.
*/

import { useLogoModel } from './Hooks'
import styles from './style.module.scss'

export type Props = {
  visited: boolean
}

export const LogoModel: React.VFC<Props> = ({ visited }): JSX.Element => {
  const { myComponent } = useLogoModel(visited)

  return <div className={`${styles.wrapper} logo-model`} ref={myComponent}></div>
}
