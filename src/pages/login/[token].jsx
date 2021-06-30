import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { store } from '../../context/store';
// import Loading from '../../components/loading/loading';
import Loader from '../../components/loader/loader';

export default function loginAuthRedirect(props) {
  const { state, dispatch } = useContext(store);
  const { isAuth } = state;
  const router = useRouter()
  const { token } = router.query

  useEffect(() => {
    if(isAuth) {
      router.push('/')
    } else {
      if(token){
        setTimeout(() => {
          let user = JSON.parse(atob(token))
          dispatch({ type: 'SET_USER', payload: user })
          router.push('/')
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
