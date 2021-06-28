/*
  Typography Container Component.
*/

import { Typography } from '@/components/Presentations/Typography'
import { SubLetter } from '@/components/Presentations/SubLetter'
import { useTypography } from './Hooks'
import styles from './style.module.scss'

type Props = {
  visited: boolean
}

export const TypographyContainer: React.VFC<Props> = ({ visited }): JSX.Element => {
  const { myComponent } = useTypography(visited)

  return (
    <div className={`${styles.wrapper} typography-container`} ref={myComponent}>
      <Typography visited={visited} />
      <SubLetter visited={visited} />
    </div>
  )
}
