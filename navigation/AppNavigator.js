import React from 'react';
// import { View, Text, Button } from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
// import Login from './AuthNavigator';


export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Auth: Login,
  Main: MainTabNavigator,
},
  {
    initialRouteName: 'Main',
  }));