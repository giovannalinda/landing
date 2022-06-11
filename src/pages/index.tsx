import type { NextPage } from 'next'
import Head from 'next/head'

import { Apresentation, Layout } from '~/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout.Header />
      <Layout.Content>
        <Apresentation />

        <Layout.Background />
      </Layout.Content>
    </>
  )
}

export default Home
