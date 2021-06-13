import Head from 'next/head';
import Layout from '../components/layout/layout';

export default function Home() {
  return (
    <div className="layout__main">
      <Head>
        <title>PuroJecuto -- proyect manager</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <div>
        <h1>Projects</h1>
        </div>
      </Layout>
    </div>
  );
}
