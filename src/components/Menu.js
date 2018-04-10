import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';

class MyHomeScreen extends React.Component {
  render() {
    return (
      <Text>Hehe</Text>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  render() {
    return (
      <Text>Haha</Text>
    );
  }
}

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default class Menu extends Component{
  render() {
    return (
      <MyApp />
    );
  }
}
