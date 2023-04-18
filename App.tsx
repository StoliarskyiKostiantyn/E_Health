import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';

const MainStack = createNativeStackNavigator();

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    if (token !== null) {
      return token;
    }
  } catch (e: any) {
    console.log('NO TOKEN');
  }
};
const getIsSignedIn = async () => {
  const token = await getToken();
  console.log(token);
};
getIsSignedIn();

const App = () => {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {isSignedIn ? (
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
