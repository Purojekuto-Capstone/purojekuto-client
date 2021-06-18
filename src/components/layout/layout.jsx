import Header from '../header/header';
import Sidebar from '../sideBar/sideBar';
import { store } from '../../context/store';
import { useContext } from 'react';

export default function Layout({ children }) {
  const { state } = useContext(store);
  const { theme, mainClass } = state;

  function handleClick() {}

  return (
    <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className={`layout ${mainClass}`}>
        <Sidebar />
        <main className="layout__content">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
}
