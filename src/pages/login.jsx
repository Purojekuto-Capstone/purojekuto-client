/* import React from 'react' */
import {useRouter} from 'next/router'
import { store } from '../context/store';
import { useContext } from 'react';
import { faMoon,faSun } from '@fortawesome/free-regular-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
    const router = useRouter()
    const { dispatch, state } = useContext(store);
    const { theme  } = state;

    let handleThemeTrigger = () => {
        theme === 'dark'
          ? dispatch({ type: 'THEME__TRIGGER', payload: 'light' })
          : dispatch({ type: 'THEME__TRIGGER', payload: 'dark' });
      };

    return (
        <div className={`main__container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <div onClick={() => handleThemeTrigger()}>
            <FontAwesomeIcon
              className="layout__header--icon"
              icon={theme === 'dark' ? faSun : faMoon}
            />
            </div>
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