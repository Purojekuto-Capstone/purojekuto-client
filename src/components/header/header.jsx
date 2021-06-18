import React, { useContext } from 'react';
import { store } from '../../context/store';
import { faMoon, faSun, faBell,faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoForDark from '../../assets/images/Purojekuto-dark.svg';
import logoForLight from '../../assets/images/Purojekuto-light.svg';

const headerLayout = () => {
  const { dispatch, state } = useContext(store);
  const { theme } = state;

  let handleThemeTrigger = () => {
    theme === 'dark'
      ? dispatch({ type: 'THEME__TRIGGER', payload: 'light' })
      : dispatch({ type: 'THEME__TRIGGER', payload: 'dark' });
  };

  return (
    <header className="layout__header">
      <div>
        <div className="logo__container">
          <img
            className={'layout__header--logo'}
            src={theme === 'dark' ? logoForDark : logoForLight}
            alt="Purojekto"
          />
        </div>
      </div>

      <nav>
        <ul >
          <li onClick={() => handleThemeTrigger()}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </li>
          <li><FontAwesomeIcon  icon={faBell} /></li>
          <li><FontAwesomeIcon className="layout__header--user" icon={faUser} /><span>Username</span></li>
        </ul>
      </nav>
    </header>
  );
};
export default headerLayout;
