import Header from '../header/header';
import Sidebar from '../sideBar/sideBar';
import { store } from '../../context/store';
import { useContext, useEffect } from 'react';
import Downbar from '../sideBar/downbar';

export default function Layout({ children }) {
  const { state } = useContext(store);
  const { theme, mainClass, isAuth, userId } = state;

  useEffect(() => {
    // console.log(isAuth, userId)
  }, [isAuth])

  return (
    <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className={`layout ${mainClass}`}>
        <Sidebar />
        <main className={`layout__content red-theme`}>
          <Header />
          {children}
        </main>
        <Downbar/>
      </div>
    </div>
  );
}
