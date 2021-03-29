import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const { Navigator, Screen } = createStackNavigator();

import Landing from './pages/LandingPage';
import Login from './pages/Login';
import Visitante from './pages/Visitante';
import Header from './components/Header';
import ConsultarMilhas from './pages/ConsultarMilhas';
import PlanejarViagem from './pages/PlanejarViagem';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="LandingPage" component={Landing} options={{ headerShown: false }} />
        <Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
        <Screen name="VisitantePage" component={Visitante} options={{ header: () => <Header title="Olá visitante," Description="entre ou faça Parte." /> }} />
        <Screen name="ConsultarMilhas" component={ConsultarMilhas} options={{ header: () => <Header title="Consultar Milhas" /> }} /> 
        <Screen name="PlanejarViagem" component={PlanejarViagem} options={{ header: () => <Header title="Planejar Viagem" /> }} /> 
      </Navigator>
    </NavigationContainer>
  );
}