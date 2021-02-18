import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Plat - Boilerplate</title>
        <link rel="shortcut icon" href="/assets/icons/vercel.svg" />
        <link rel="apple-touch-icon" href="/assets/icons/vercel.svg" />
        <meta name="description" content="A simple project starter to work with TypeScript, React, NextJS and Styled Components" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
