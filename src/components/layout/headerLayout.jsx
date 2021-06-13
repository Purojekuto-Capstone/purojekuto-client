import React, { useContext } from 'react';
import { store } from '../../context/store'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const headerLayout = () => {
  const {dispatch, state} = useContext(store)
  const { theme } = state;

  let handleThemeTrigger = () => {
    theme === 'dark' 
    ? dispatch({ type: 'THEME__TRIGGER', payload: 'light' })
    : dispatch({ type: 'THEME__TRIGGER', payload: 'dark' })
  }

  return (
    <header className="layout__header">
      <div>
      <h1 className="layout__header--logo"><strong>^_^Puro</strong>jecuto</h1>
      </div>
      
      <nav >
        <ul className="nav">
          <li onClick={() => handleThemeTrigger()}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon}/>
          </li>
          <li>🔉</li>
          <li>😎</li>
          <li>Username</li>
        </ul>
      </nav>
    </header>
  );
};
export default headerLayout;
