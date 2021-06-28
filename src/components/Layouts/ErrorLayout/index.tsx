/*
  Error Layout.
*/

import { ErrorPageHeaderContainer } from '@/components/Managements/ErrorPageHeaderContainer'
import { ErrorPageFooterContainer } from '@/components/Managements/ErrorPageFooterContainer'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import styles from './style.module.scss'

type Props = {
  pages: PageProps['pages']
}

export const ErrorLayout: React.FC<Props> = ({ pages, children }): JSX.Element => {
  const router = useRouter()

  return (
    <div className={`${pages} ${styles['wrapper']} error-layout`}>
      <ErrorPageHeaderContainer />
      <main
        className={`${styles['main-content']} main-content`}
        style={{ backgroundImage: `${router ? `url("${router.basePath}/webps/logo.webp")` : 'url("webps/logo.webp")'}` }}
      >
        {children}
      </main>
      <ErrorPageFooterContainer />
    </div>
  )
}
