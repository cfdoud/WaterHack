import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import FloodData from './FloodData';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FloodData" component={FloodData} />
    </Stack.Navigator>
  );
}

export default AppNavigator;