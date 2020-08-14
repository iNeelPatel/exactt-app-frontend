import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome/index.js';
import InfoScreen from '../screens/Info';
import Permission from '../screens/Permission';
import Login from '../screens/Login';
import OTP from '../screens/OTP';

const Stack = createStackNavigator();

const Navigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator headerMode="none" initialRouteName="InfoScreen">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="InfoScreen" component={InfoScreen} />
            <Stack.Screen name="Permission" component={Permission} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OTP" component={OTP} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Navigation;
