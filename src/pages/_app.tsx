import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyles from '@/styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Schumacher boilerplate</title>
        <meta name="description" content="Boilerplate for personal projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
