import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    /*
    TBD.
    const originalRenderPage = ctx.renderPage
    */
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
