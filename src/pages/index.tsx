import type { NextPage } from 'next'
import Head from 'next/head'

import { About, Apresentation, Layout, MyService, MyWorks } from '~/components'

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
        <About />
        <MyService />
        <MyWorks />
        <Layout.Background />
      </Layout.Content>
    </>
  )
}

export default Home
