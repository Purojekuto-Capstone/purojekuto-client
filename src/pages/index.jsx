import Head from "next/head";
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <h1 className='title'>Welcome Team</h1>
      </Layout>
    </div>
  );
}
