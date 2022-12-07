import Head from 'next/head'
import Header from '../components/header/index'

export default function About() {
  return (
    <div>
      <Head>
        <title>Extra Mural Activities</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header height="h-96"/>
      <div>
        Extra Mural Activities
      </div>
    </div>
  )
}
