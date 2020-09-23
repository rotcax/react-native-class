import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import Dashboard from '../Dashboard';

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
);
