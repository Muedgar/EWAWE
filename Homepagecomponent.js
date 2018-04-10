import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { DrawerNavigator } from 'react-native';

class LogoTitle extends Component {
  render() {
    return (
      <Text style={{
        fontFamily: 'Arial',
        fontSize: 20,
        paddingLeft: 5,
        color: 'white',
        fontWeight: 'bold'
        }}
      >EWAWE</Text>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <Button
         onPress={() => this.props.navigation.navigate('DrawerToggle')}
         title="Menu"
      />
    );
  }
}

class Homepage extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./src/components/logo.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    headerLeft: <LogoTitle />,
    headerRight: <Menu />,
    headerStyle: {
      backgroundColor: '#009798',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View>
        <Text>Home content</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: Homepage,
  }
});

export default class App extends Component {
render () {
return <Homepagecomponent />;
}
}
