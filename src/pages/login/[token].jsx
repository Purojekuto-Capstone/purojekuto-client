import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { store } from '../../context/store';
import Loader from '../../components/loader/loader';

export default function loginAuthRedirect(props) {
  const { state, dispatch } = useContext(store);
  const { isAuth } = state;
  const router = useRouter()
  const { token } = router.query

  useEffect(() => {
    if(isAuth) {
      router.push('/projects')
    } else {
      if(token){
        setTimeout(() => {
          console.log('Token => ',token);
          dispatch({ type: 'SET_USER', payload: token })
          router.push('/projects')
        }, 800);
      }
    }
  }, [token])

  return (
    <div className='loader__container full'>
      <Loader/>
    </div>
  )
}
