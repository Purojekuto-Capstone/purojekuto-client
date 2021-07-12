import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import { store } from '../context/store';
import Loading from '../components/loading/loading';
import { getProyect, getProyects } from '../utils/services';
import ListProject from '../components/listProject/listProject';
import Link from 'next/link';
import { async } from 'q';
import { useRouter } from 'next/router'
import Redirect from '../components/redirect/redirect'
import { useLocalStorage } from '../hooks/useLocalStorage'
import LoaderComponent from '../components/loader/loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



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
            <div className='project__header'>
              <h1 className='title'>Projects</h1>
              <Link href="/newProject">
                <button className='btn btn-primary btn__project--add'><FontAwesomeIcon icon={faPlus} className='mr-1'/> Add project</button>
              </Link>
            </div>

            {
              isLoading ? (
                <div className='loader__container' style={{"minHeight": "60vh", "width": "100%"}}><LoaderComponent /></div>
              ) : (
                <>
                  {proyects.length >= 1 ? (
                    <ListProject proyects={proyects}/>
                  ) : (
                    <div className='empty__space'>
                      You don't have any proyect, add new project to start planning
                    </div>
                  )}
                </>
              )
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
