import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { store } from '../../context/store';

export default function loginAuthRedirect(props) {
  const { state, dispatch } = useContext(store);
  const { isAuth } = state;
  const router = useRouter()
  const {token} = router.query

  useEffect(() => {
    console.log(token);
    if(isAuth) {
      router.push('/')
    } else {
      if(token){
        setTimeout(() => {
          dispatch({ type: 'SET_USER', payload: token})
          router.push('/')
        }, 800);
      }
    }
  }, [token])

  return (
    <div>
      loading...
    </div>
  )
}