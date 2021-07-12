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
import Projects from './projects';
import Landing from './landing';



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

  return(
    <Landing/>
  )
  
  // if(isAuth) {
  //   return (
  //     <Projects/>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Redirect path={'/login'}/>
  //     </>
  //   )
  // }
  
}
