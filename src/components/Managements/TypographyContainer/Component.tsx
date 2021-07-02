/*
  Typography Container Component.
*/

import { Typography } from '@/components/Presentations/Typography'
import { SubLetter } from '@/components/Presentations/SubLetter'
import { useTypography } from './Hooks'
import styles from './style.module.scss'

export const TypographyContainer: React.VFC = (): JSX.Element => {
  const { myComponent, visited } = useTypography()

  return (
    <div className={`${styles.wrapper} typography-container`} ref={myComponent}>
      <Typography visited={visited} />
      <SubLetter visited={visited} />
    </div>
  )
}
