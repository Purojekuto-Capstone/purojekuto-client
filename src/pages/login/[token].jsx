import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { store } from '../../context/store';
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function loginAuthRedirect(props) {
  const { state, dispatch } = useContext(store);
  const { isAuth } = state;
  const router = useRouter()
  const { token } = router.query

  useEffect(() => {
    // var obj = {a: 'a', b: 'b'};
    // let encoded = btoa(JSON.stringify(obj))
    // ewogICJ0b2tlbiI6ICJqYW5zamFqc2FzIiwKICAic2x1YiI6ICJhbXNhc2FzIgp9
    if(token) {
      let authInfo = JSON.parse(atob(token))
      console.log(authInfo);
      console.log('token =>',authInfo.token);

    }

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
    <div>
      loading...
    </div>
  )
}
