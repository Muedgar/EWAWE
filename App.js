import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { Logo, Forms, Housecard } from './src/components/index';

// Homescreen is a page that returns Housecard
const replacer = {
       replacerStyle: {
                         fontFamily: 'Arial',
                         fontSize: 20,
                         paddingLeft: 5,
                         color: 'white',
                         fontWeight: 'bold'
                      }
                 };
class Homescreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#009798',
    },
    headerRight: <Button style={{ padding: 10, backgroundColor: '#009798' }}>
                    <Icon
                       name='menu'
                       style={{ color: 'white' }}
                    />
                 </Button>,
    headerLeft: <Text style={replacer.replacerStyle}>Find House</Text>
  }
  render() {
    return (
      <Housecard />
    );
  }
}


// Appscreen is a page that returns a login screen
class Appscreen extends Component {
    static navigationOptions = {
       header: null
    }

    render() {
      return (
      <View style={{ flex: 1 }}>
       <Logo style={{ flex: 1 }} />
       <Forms style={{ flex: 1 }} />
       <View>
       <Button
        onPress={() => this.props.navigation.navigate('Home')}
        style={{ width: 250, height: 40 }}
        backgroundColor='#009798'
       >
        <Text
              style={{
                      fontWeight: 'bold',
                      paddingLeft: 100,
                      fontSize: 16,
                      color: 'white'
                    }}
        >Log in
        </Text>
       </Button>
       </View>
      </View>
      );
    }
    }

// RootStack is a binder that holds every page together
const RootStack = StackNavigator(
  {
    Firstscreen: {
      screen: Appscreen,
    },
    Home: {
      screen: Homescreen,
    }
  },
  {
    initialRouteName: 'Firstscreen',
  }
);

// styling headerLeft
// const styles = {
//     headerStyling: {
//       fontFamily: 'Arial',
//       fontSize: 20,
//       paddingLeft: 5,
//       color: 'white',
//       fontWeight: 'bold'
//     },
//     buttonContainer: {
//       paddingLeft: 70,
//       width: 250,
//       height: 40,
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'center'
//     }
// };
// this is a Component that returns RootStack
class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;
