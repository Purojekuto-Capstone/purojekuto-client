import React, { createContext, useReducer } from 'react';

const initialState = {
  isOpen: false,
  theme: 'light',
  mainClass: '',
  isAuth: false,
  userId: null
};

const store = createContext(initialState);
const { Provider } = store;

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'MODAL_TRIGGER':
        return {
          ...state,
          isOpen: !state.isOpen,
        };
      case 'THEME__TRIGGER':
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
        return {
          ...state,
          isAuth: true,
          userId: action.payload,
        };
      case 'CLEAN_USER':
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
