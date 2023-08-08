import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {useSelector} from 'react-redux';
import Loading from './components/Loading';

const Stack = createNativeStackNavigator();

const App = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthLoading ? (
          <Loading />
        ) : !userSession ? (
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
        ) : (
          <>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: 'Dukkan',
                headerStyle: {backgroundColor: '#90caf9'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
