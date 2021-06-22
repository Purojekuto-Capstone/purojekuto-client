import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import { store } from '../context/store';
import Loading from '../components/loading/loading';
import Proyects from '../data/proyects.json'
import {getProyects} from '../utils/services';
import ListProyect from '../components/listProyect/listProyect';
import { async } from 'q';




export default function Home() {
  const { state } = useContext(store);
  const { theme } = state;
  const [isLoading,setIsLoading] = useState(true);
  const [proyects,setProyects] = useState([]);

  useEffect(() => {
    async function loadProyects (){
      const response = await getProyects()
      
      if (response.status === 200){
        setProyects(response.data)
      }
      setIsLoading(false)
    } 
    loadProyects()
  },[])


  return (
    <>
      <Head>
        <title>PuroJekuto</title>
        <meta name="descriptio" content="proyect manager" />
      </Head>

      <Layout>
        <div className='container'>
          <div className='container__button'>
            <h1>Projects</h1>  <button className= 'btn btn-primary'>New</button>
          </div>

          {
             isLoading && <Loading />
          }
          {
            !isLoading && !proyects.length && (
              'You dont have proyect, add new proyect'
            )
          }
          {
            !isLoading && proyects.length && <ListProyect proyects={proyects} />
          }

    
       

        </div>
      </Layout>
    </>
  );
}
