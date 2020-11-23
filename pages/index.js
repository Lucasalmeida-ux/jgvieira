import Head from 'next/head'
import Layout from './components/layout'

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
