import Head from 'next/head'
import Layout from './components/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JG Vieira - Página Inicial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Início</h1>
    </Layout>
  )
}
