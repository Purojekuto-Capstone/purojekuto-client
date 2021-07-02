import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import { store } from '../context/store';
import Loading from '../components/loading/loading';
import { getProyect, getProyects } from '../utils/services';
import ListProyect from '../components/listProyect/listProyect';
import Link from 'next/link';
import { async } from 'q';
import { useRouter } from 'next/router'
import Redirect from '../components/redirect/redirect'
import { useLocalStorage } from '../hooks/useLocalStorage'
import LoaderComponent from '../components/loader/loader';



export default function Home() {
  const { state } = useContext(store)
  const { isAuth, token } = state
  const [isLoading,setIsLoading] = useState(true);
  const [proyects,setProyects] = useState([]);
  const router = useRouter()

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if(token) {
      getProyects(config)
    .then(res => {
      setProyects(res.data)
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    })
    .catch(err => {
      console.error(err)
    })
    }
  }, [token]);
  
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
              isLoading && <div className='loader__container' style={{"minHeight": "60vh", "width": "100%"}}><LoaderComponent /></div>
            }
            {
              !isLoading && !proyects.length && (
                'You dont have proyect, add new project'
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
