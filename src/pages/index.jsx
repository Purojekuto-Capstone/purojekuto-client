import Head from 'next/head';
import { useContext } from 'react';
import Layout from '../components/layout/layout';
import { store } from '../context/store'

export default function Home() {
  const { state } = useContext(store)
  const { theme } = state;

  return (
    <>
      <Head>
        <title>PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <div>
        <h1>Projects</h1>
        </div>
      </Layout>
    </>
  );
}
