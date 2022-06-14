import type { NextPage } from 'next'
import Head from 'next/head'

import {
  About,
  Apresentation,
  Banner,
  Companies,
  Contact,
  Layout,
  MyService,
  MyWorks,
  Testimonial,
} from '~/components'

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
        <Companies />
        <Banner />
        <Testimonial />
        <Contact />
        <Layout.Background />
      </Layout.Content>
      <Layout.Footer />
    </>
  )
}

export default Home
