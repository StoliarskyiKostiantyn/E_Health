import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';

const MainStack = createNativeStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return false;
};
const App = () => {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {isSignedIn ? (
          <>
            <MainStack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <MainStack.Screen name="SignIn" component={Login} />
            <MainStack.Screen name="SignUp" component={Registration} />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
