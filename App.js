import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';


import Home from './src/pages/Home';
import Contato from './src/pages/Contato';

const Routes = createAppContainer(
  createDrawerNavigator({
    Contato, Home
  }, {
    initialRouteName: 'Home'
  })
);

export default Routes;

 
  
