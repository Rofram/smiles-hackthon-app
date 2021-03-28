import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const { Navigator, Screen } = createStackNavigator();

import Landing from './pages/LandingPage';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Landing_Page" component={Landing} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}