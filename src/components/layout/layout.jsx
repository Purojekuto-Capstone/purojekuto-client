import Header from './headerLayout';
import Footer from './footerLayout';
import LeftNavLayout from './leftNavLayout';

export default function Layout({children}) {
  return (
    <div className="layout">
      <LeftNavLayout />
      <main className="layout__content">
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
}
