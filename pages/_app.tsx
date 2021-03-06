import React, { Fragment } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '@fontsource/noto-sans'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
