import { useRouter } from 'next/router';
import { store } from '../context/store';
import React, { useContext } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RedirectPage from '../components/redirect/redirect.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.jsx';

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="376"
              height="80"
              viewBox="0 0 376 80"
            >
              <text
                class="login__container--h1"
                id="ジPurojekuto_"
                data-name="ジPurojekuto "
                transform="translate(0 60)"
                fill="#f89f26"
                font-size="57"
                font-family="PingFangSC-Semibold, PingFang SC"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  ジ
                </tspan>
                <tspan y="0" font-family="Poppins-SemiBold, Poppins">
                  Puroj
                </tspan>
                <tspan
                  y="0"
                  font-family="Poppins-Light, Poppins"
                  font-weight="300"
                >
                  ekuto{' '}
                </tspan>
              </text>
            </svg>

              <h1 className="login__container--p">Welcome to the Project Manager`s App</h1>
              
            <a href='https://purojekuto-backend.herokuapp.com/login'>
                <button
                className="login__container--btn"
                // onClick={() =>
                //     router.push(
                //     '/login/ewogICJ0b2tlbiI6ICIxMjM0NTY3ODkwIiwKICAidXNlcklkIjogInF3ZXJ0eXVpb3AiCn0='
                //     )
                // }
                >
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
