import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import {MyDrawer} from './src/drawer/MyDrawer';

const MainStack = createNativeStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return true;
};
const App = () => {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {isSignedIn ? (
          <>
            <MainStack.Screen
              options={{
                headerShown: false,
              }}
              name="MyDrawer"
              component={MyDrawer}
            />
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
