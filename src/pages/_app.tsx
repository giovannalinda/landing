import { AppProps } from 'next/app'

import { GlobalStyles } from '~/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
