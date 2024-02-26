import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import Lacreme from './Lacreme';
import Copenhague from './Copenhague';
import Lollo from './Lollo';

const Stack = createStackNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lacreme" component={Lacreme} />
        <Stack.Screen name="Copenhague" component={Copenhague} />
        <Stack.Screen name="Lollo" component={Lollo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;