import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import { store } from '../context/store';
import Loading from '../components/loading/loading';
import { getProyects } from '../utils/services';
import ListProyect from '../components/listProyect/listProyect';
import Link from 'next/link';
import { async } from 'q';
import { useRouter } from 'next/router'
import Redirect from '../components/redirect/redirect'
import { useLocalStorage } from '../hooks/useLocalStorage'



export default function Home() {
  const { state } = useContext(store)
  const { isAuth } = state
  const [isLoading,setIsLoading] = useState(true);
  const [proyects,setProyects] = useState([]);
  const router = useRouter()

  const [authenticated, setAuthenticated] = useLocalStorage('authenticated');

  useEffect(() => {
    async function loadProyects() {
      const response = await getProyects();

      if (response.status === 200) {
        setProyects(response.data);
      }
      setIsLoading(false);
    }
    loadProyects();
  }, []);
  
  if(isAuth) {
    return (
      <>
        <Head>
          <title>PuroJekuto</title>
          <meta name="descriptio" content="proyect manager" />
        </Head>
  
        <Layout>
          <div className='container'>
            <div className='container__button'>
              <h1>Projects</h1>
              <Link href="/newProyect">
                <button className= 'btn btn-primary'>New</button>
              </Link>
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
  } else {
    return (
      <>
        <Redirect path={'/login'}/>
      </>
    )
  }
  
}
