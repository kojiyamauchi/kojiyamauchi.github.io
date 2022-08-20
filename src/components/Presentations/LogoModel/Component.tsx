/*
  Logo Model Component.
*/

import { useLogoModel } from './Hooks'
import styles from './style.module.scss'

export const LogoModel: React.FC = (): JSX.Element => {
  const { myComponent } = useLogoModel()

  return <div className={`${styles.wrapper} logo-model`} ref={myComponent}></div>
}
