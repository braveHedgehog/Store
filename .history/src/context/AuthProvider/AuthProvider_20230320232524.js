/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer';

const AuthProvider = ({children}) => {

  const store = createStore(reducers, )  
  return <Provider>{children}</Provider>;
};
