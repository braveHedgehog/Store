/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);

    useEffect(() =>{
        
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && (JSON.parse(userSession));
            setAuthLoading(false);
        });
    }, []);


  const store = createStore(reducers, {});
  return <Provider>{children}</Provider>;
};
