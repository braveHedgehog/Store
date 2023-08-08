/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {useSelector, useDispatch} from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const App = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              title: 'Login',
              headerStyle: {backgroundColor: '#90caf9'},
              headerTitleStyle: {color: 'white'},
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: 'Dukkan',
                headerStyle: {backgroundColor: '#90caf9'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerRight: () => (
                  <Icon name="logout" size={30} color="white" />
                ),
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={Detail}
              options={{
                title: 'Dukkan',
                headerStyle: {backgroundColor: '#90caf9'},
                headerTitleStyle: {color: 'white'},
                headerTintColor: 'white',
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default App;
