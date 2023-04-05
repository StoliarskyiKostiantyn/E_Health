import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import './src/firebase/config';
import {useAuth} from './src/hooks/useAuth';

const MainStack = createNativeStackNavigator();

const App = () => {
  const {userA} = useAuth();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {userA ? (
          <>
            <MainStack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="Registration" component={Registration} />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
