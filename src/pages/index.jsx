import Head from 'next/head';
import { useContext, useState } from 'react';
import Layout from '../components/layout/layout';
import { store } from '../context/store';
import Button from '../components/button/button';
import Loading from '../components/loading/loading';



export default function Home() {
  const { state } = useContext(store);
  const { theme } = state;
  const [isLoading,setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <div className='container'>
          <div className='container__button'>
            <h1>Projects</h1> <Button/>
          </div>

          

          
          {
            isLoading
            ? <Loading />
            : <>
            <div className='container__content'>
            <h1>Project1</h1>
            <h1>Detail</h1>
          </div>  

          <div className='container__content'>
            <h1>Project2</h1>
            <h1>Detail</h1>
          </div>
            </>
          }

        </div>
      </Layout>
    </>
  );
}
