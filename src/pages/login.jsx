import React, {useContext} from 'react'
import {useRouter} from 'next/router'
import { store } from '../context/store.js'
import RedirectPage from '../components/redirect/redirect.jsx'
import { useLocalStorage } from '../hooks/useLocalStorage.jsx'

export default function Login() {
    const router = useRouter()
    const { state } = useContext(store)
    const { isAuth } = state
    const [authenticated, setAuthenticated] = useLocalStorage('authenticated');


    if(isAuth) {
        return <RedirectPage path='/'/>
    } else {
        return (
            <div className="main__container">
                <div className="login__container">
                    <h1 className="login__container--h1"> ジPurojekuto </h1>
    
                    {/* TODO: @Antonn we need to change this login, we will use a single button like this => 
                    https://yosoy.dev/wp-content/uploads/2018/11/Google-Sign-In.png  the link will redirect to and endpoint, meanwhile redirect to '/login/1234567890' */}
    
                    <div className='input__container'>
                        <p className="login__container--p">Email</p>
                        <input className="login__container--input" type="email" placeholder="  mail@mail.com" />
                    </div>
                    <div className='input__container'> 
                        <p className="login__container--p" >Password</p>
                        <input className="login__container--input" type="password" placeholder="  Super password" />
                    </div>
                    <button className="login__container--btn" onClick={() => router.push('/login/1234567890')}>Let's gooo!</button>
                    <p className="login__container--p2"> By signing up, I agree to the <span>Privacy Policy</span>  and <span> Terms of service.</span>  </p>
                </div>
            </div>
        )
    }
}
