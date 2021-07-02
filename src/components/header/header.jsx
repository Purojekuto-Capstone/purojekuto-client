import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { store } from '../../context/store';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  faMoon,
  faSun,
  faBell,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoForDark from '../../assets/images/Purojekuto-dark.svg';
import logoForLight from '../../assets/images/Purojekuto-light.svg';
import {useRouter} from 'next/router';
import { getUserInfo } from '../../utils/services';

const headerLayout = () => {
  const { dispatch, state } = useContext(store);
  const [user, setUser] = useState(null)
  const { theme, token } = state;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  
  let handleThemeTrigger = () => {
    if(theme === 'dark') {
      dispatch({ type: 'THEME__TRIGGER', payload: 'light' })
    } else {
      dispatch({ type: 'THEME__TRIGGER', payload: 'dark' })
    }
  };

  useEffect(() => {
    getUserInfo(config)
    .then(res => {
      setUser(res)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <header className="layout__header">
      <div>
        <div className="logo__container">
          <Link rel="stylesheet" href="/">
            <img
              className={'layout__header--logo'}
              src={theme === 'dark' ? logoForDark : logoForLight}
              alt="Purojekto"
            />
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li onClick={() => handleThemeTrigger()}>
            <FontAwesomeIcon
              className="layout__header--icon"
              icon={theme === 'dark' ? faSun : faMoon}
            />
          </li>
          <li className='user__container'>
            <img className='profilePicture' src={user ? user.picture : ''} alt={user ? user.name : ''}/>
            <h4 className='username'>{user ? user.name : ''}</h4>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default headerLayout;
