import Head from 'next/head'
import { useRouter } from 'next/router'
import { baseSeo } from 'base.config.client'
import Script from 'next/script'

type Props = {
  title?: string
  description?: string
  keywords?: string
  locationPath?: string
  ogpSiteName?: string
  ogpTitle?: string
  ogpDescription?: string
  ogpImage?: string
}

export const SEO: React.VFC<Props> = (props): JSX.Element => {
  const router = useRouter()

  const setSeo = {
    title: props.title ? `${props.title} | ${baseSeo.title}` : baseSeo.title,
    description: props.description ? `${baseSeo.description} and ${props.description}` : baseSeo.description,
    location: props.locationPath ? `${baseSeo.location}${props.locationPath}` : baseSeo.location,
    ogpSiteName: props.ogpSiteName || baseSeo.ogpSiteName,
    ogpTitle: props.ogpTitle ? `${props.ogpTitle} | ${baseSeo.ogpTitle}` : baseSeo.ogpTitle,
    ogpDescription: props.ogpDescription || baseSeo.ogpDescription,
    ogpImage: props.ogpImage || baseSeo.ogpImage
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta httpEquiv="content-language" content="ja" key="content-language" />
        <title key="title">{setSeo.title}</title>
        <meta name="title" content={setSeo.title} key="meta-title" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta name="description" content={setSeo.description} key="description" />
        <meta property="og:type" content="website" key="ogp-type" />
        <meta property="og:url" content={setSeo.location} key="ogp-url" />
        <meta property="og:site_name" content={setSeo.ogpSiteName} key="ogp-site-name" />
        <meta property="og:title" content={setSeo.ogpTitle} key="ogp-title" />
        <meta property="og:description" content={setSeo.ogpDescription} key="ogp-description" />
        <meta property="og:image" content={`${router.basePath}/images/${setSeo.ogpImage}`} key="ogp-image" />
        <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
        <meta name="twitter:title" content={setSeo.title} key="twitter-title" />
        <meta name="twitter:description" content={setSeo.description} key="twitter-description" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${router.basePath}/favicons/apple-touch-icon.png`} key="apple-touch-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicons/favicon-32x32.png`} key="l-favicon" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicons/favicon-16x16.png`} key="s-favicon" />
        <link rel="manifest" href={`${router.basePath}/site.webmanifest`} key="manifest" />
        <link rel="mask-icon" href={`${router.basePath}/favicons/safari-pinned-tab.svg`} color="#5bbad5" key="mask-icon" />
        <meta name="msapplication-TileColor" content="#da532c" key="msapplication-tile-color" />
        <meta name="theme-color" content="#ffffff" key="theme-color" />
        <link rel="canonical" href={setSeo.location} key="canonical" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-18W6JCML94" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-18W6JCML94');
        `}
      </Script>
    </>
  )
}
