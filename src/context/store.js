import React, { createContext, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialState = {
  isOpen: false,
  theme: typeof window !== 'undefined' && JSON.parse(localStorage.getItem('theme')) || 'light',
  mainClass: '',
  isAuth: typeof window !== 'undefined' && JSON.parse(localStorage.getItem('authenticated')) || false,
  userId: typeof window !== 'undefined' && JSON.parse(localStorage.getItem('token')) || '',
};

const store = createContext(initialState);
const { Provider } = store;


const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme');
  const [authenticated, setAuthenticated] = useLocalStorage('authenticated');
  const [token, setToken] = useLocalStorage('token');

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'MODAL_TRIGGER':
        return {
          ...state,
          isOpen: !state.isOpen,
        };
      case 'THEME__TRIGGER':
        setTheme(action.payload)
        return {
          ...state,
          theme: action.payload,
        };
      case 'MAIN_TRIGGER':
        return {
          ...state,
          mainClass: action.payload,
        };
      case 'SET_USER':
        setAuthenticated(true)
        setToken(action.payload)
        return {
          ...state,
          isAuth: true,
          userId: action.payload,
        };
      case 'CLEAN_USER':
        setAuthenticated(false)
        setToken('')
        return {
          ...state,
          isAuth: false,
          userId: null,
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, ContextProvider };
