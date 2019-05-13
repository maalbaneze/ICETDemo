// import React from 'react';
// import { Platform } from 'react-native';
// import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// //import Main from '../screens/Main';
// import Login from '../screens/Login';
// import MainStack from '/navigation/MainTabNavigator'
// // import TabBarIcon from '../components/TabBarIcon';
// // import SignUp from '../screens/Auth/SignUp';


// class ModalScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 30 }}>This is a modal!</Text>
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

// const MainStack = createStackNavigator({
//   Home: Main,
//   MyModal: ModalScreen,
//   mode: 'modal',
//   headerMode: 'none',
// });

// MainStack.navigationOptions = {
//   tabBarLabel: 'Main',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };


// export default createBottomTabNavigator({
//   LoginStack,
//   //MainStack
//   // SignUp: {
//   //   screen: SignUp,
//   //   path: "/signup"
//   // }
// });

