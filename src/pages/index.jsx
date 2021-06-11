import Head from "next/head";
import Layout from "../common/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <div className='container'>
        <h1>Welcome Team</h1>
      </div>
    </Layout>
  );
}
