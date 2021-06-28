/*
  Image Component.
*/

import { useImage } from './Hooks'
import { useRouter } from 'next/router'
import styles from './style.module.scss'

export type Props = {
  image: string
  extension: 'webp' | 'svg' | 'png' | 'jpg' | 'gif'
  alt: string
}

type OptionalKeys =
  | 'mobileWidth'
  | 'desktopWidth'
  | 'mobileMinWidth'
  | 'desktopMinWidth'
  | 'mobileMaxWidth'
  | 'desktopMaxWidth'
  | 'mobileHeight'
  | 'desktopHeight'
  | 'mobileMinHeight'
  | 'desktopMinHeight'
  | 'mobileMaxHeight'
  | 'desktopMaxHeight'
  | 'margin'
  | 'mobileMargin'
  | 'desktopMargin'

export type OptionalProps = {
  [P in OptionalKeys]: string
}

export const Image: React.VFC<Partial<OptionalProps> & Props> = ({ image, extension, alt, ...props }): JSX.Element => {
  const { firstRender, matches, path, stylesProps } = useImage(extension, props)
  const router = useRouter()

  return (
    <>
      {firstRender ? (
        <>
          <img src={`${router ? `${router.basePath}/` : ''}images/loading.svg`} alt="Loading..." />
        </>
      ) : (
        <img
          className={`${styles.image} generic-image`}
          src={`${router ? `${router.basePath}/` : ''}${path}/${image}.${extension}`}
          alt={alt}
          loading="lazy"
          style={{ ...stylesProps(matches) }}
        />
      )}
    </>
  )
}
