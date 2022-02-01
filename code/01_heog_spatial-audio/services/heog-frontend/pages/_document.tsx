import Document, { Head, Html, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <title>HEOG Classifier</title>
        <Head />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Daniel Burger' />
        <meta name='robots' content='index, nofollow' />
        <meta
          name='description'
          content='This is the HEOG classifier demonstration project for the HEOG Spatial Audio demo at IDUN Technologies and my personal bachelor thesis project.'
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
