import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { store } from '../../context/store';
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function loginAuthRedirect(props) {
  const { state, dispatch } = useContext(store);
  const { isAuth } = state;
  const router = useRouter()
  const {token} = router.query
  const [authenticated, setAuthenticated] = useLocalStorage('authenticated', isAuth);
  const [t, setT] = useLocalStorage('token', '');


  useEffect(() => {
    console.log(token);
    if(authenticated === true) {
      router.push('/')
    } else {
      if(token){
        setTimeout(() => {
          setAuthenticated(true)
          setT(token)
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
