import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { Logo, Forms, Housecard, Calculator, Mortgagedeals } from './src/components/index';

// loans is a page that returns Mortgagedeals
class Loans extends Component {
  static navigationOptions = {
    headerLeft: <Text
                    style={{
                             fontFamily: 'Arial',
                             fontSize: 20,
                             paddingLeft: 5,
                             color: 'white',
                             fontWeight: 'bold'
                          }}
                >
                   Mortgage Loans & Rates
                </Text>,
    headerStyle: {
      backgroundColor: '#009798',
    },
  }
  render() {
    return (
      <View>
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go back to homepage"
      />
      <Mortgagedeals />
      </View>
    );
  }
}


// Calcs is a page that returns Calculator
class Calcs extends Component {
  static navigationOptions = {
    headerLeft: <Text
                    style={{
                             fontFamily: 'Arial',
                             fontSize: 20,
                             paddingLeft: 5,
                             color: 'white',
                             fontWeight: 'bold'
                          }}
                >
                   Mortgage Calculator
                </Text>,
    headerStyle: {
      backgroundColor: '#009798',
    },
  }
  render() {
    return (
      <View>
      <Calculator />
      </View>
    );
  }
}


// Homescreen is a page that returns Housecard
class Homescreen extends Component{
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
    headerLeft: <Text
                    style={{
                             fontFamily: 'Arial',
                             fontSize: 20,
                             paddingLeft: 5,
                             color: 'white',
                             fontWeight: 'bold'
                          }}
                >
                   Find House
                </Text>
  }
  render() {
    return (
      <Housecard />
    );
  }
}


// Appscreen is a page that returns a login screen
class Appscreen extends Component{
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
        onPress={() => this.props.navigation.navigate('Thirdscreen')}
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
    },
    Thirdscreen: {
      screen: Calcs,
    },
    Fourscreen: {
      screen: Loans,
    },
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
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
