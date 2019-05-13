import React from 'react';
import { Platform, View, Text, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Main from '../screens/Main';
import User from '../screens/User';
import Admin from '../screens/Admin';
import Login from '../screens/Login';


const UserStack = createStackNavigator({
  User: User
});

UserStack.navigationOptions = {
  tabBarLabel: 'user',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const AdminStack = createStackNavigator({
  Admin: Admin,
});

AdminStack.navigationOptions = {
  tabBarLabel: 'admin',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

// class ModalScreen extends React.Component {

//   render() {
//     return (
//       <View>

//       </View> ,
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 30 }}>Login modal!</Text>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Dismiss"
//         />
//       </View>
//     );
//   }
// }

// const LoginStack = createStackNavigator({
//   Login: Login,
// });

// LoginStack.navigationOptions = {
//   tabBarLabel: 'login',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

const MainStack = createStackNavigator({
  Home: Main,
  MyModal: Login,
  mode: 'modal',
  headerMode: 'none',
});

MainStack.navigationOptions = {
  tabBarLabel: 'Main',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  MainStack,
  UserStack,
  AdminStack
});
