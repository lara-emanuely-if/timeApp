import React from 'react';
// import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home';
import Conta from './src/pages/Conta';
import Contato from './src/pages/Contato';
import Convite from './src/pages/Convite';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Bem-vindo(a), ao time!" component={Home} />
        <Drawer.Screen name="Cadrastar" component={Conta} />
        <Drawer.Screen name="Conquistas" component={Contato} />
        <Drawer.Screen name="Convidar amigos" component={Convite} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


