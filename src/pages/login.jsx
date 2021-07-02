import { useRouter } from 'next/router';
import { store } from '../context/store';
import React, { useContext } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RedirectPage from '../components/redirect/redirect.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.jsx';
import Logo from '../../public/assets/images/Purojekuto-light.png'

export default function Login() {
  const router = useRouter();
  const { dispatch, state } = useContext(store);
  const { theme, isAuth } = state;
  const [authenticated, setAuthenticated] = useLocalStorage('authenticated');

  let handleThemeTrigger = () => {
    theme === 'dark'
      ? dispatch({ type: 'THEME__TRIGGER', payload: 'light' })
      : dispatch({ type: 'THEME__TRIGGER', payload: 'dark' });
  };

  let handleLogion = () => {
      let endpoint = 'https://purojekuto-backend.herokuapp.com/login'
      router.push(endpoint)
  }

  if (isAuth) {
    return <RedirectPage path="/" />;
  } else {
    return (
      <div
        className={`mainc ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
      >
        <header
          className="container-theme"
          onClick={() => handleThemeTrigger()}
        >
          <FontAwesomeIcon
            className="layout__header--icon"
            icon={theme === 'dark' ? faSun : faMoon}
          />
        </header>

        <div className={`main__container `}>
          <div className="login__container">

            <div className='logo__container'>
              <img src={Logo} alt='Purojekuto'/>
            </div>

            <h2 className="login__container--p">Your personal manager app.</h2>
              
            <a href='https://purojekuto-backend.herokuapp.com/login'>
                <button className="login__container--btn">
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                    <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                    </div>
                    <p className="btn-text">
                    <b>Sign in with google</b>
                    </p>
                </div>
                </button>
            </a>
            
            <p className="login__container--p2">
              {' '}
          
            </p>
          </div>
        </div>
      </div>
    );
  }
}
