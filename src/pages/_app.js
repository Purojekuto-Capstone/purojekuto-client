import React from 'react';
import '../styles/globals.scss';
import 'react-week-calendar/dist/style.css';
import { ContextProvider } from '../context/store';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
