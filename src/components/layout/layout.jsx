import Header from './headerLayout';
import Footer from './footerLayout';
import LeftNavLayout from './leftNavLayout';
import { store } from '../../context/store'
import { useContext } from 'react';

export default function Layout({children}) {
  const { state } = useContext(store)
  const { theme } = state;
  
  return (
    <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className={'layout'}>
        <LeftNavLayout />
        <main className="layout__content">
          <Header />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
