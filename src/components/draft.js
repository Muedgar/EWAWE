// import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Logo, Forms, Calculator } from './src/components/index';
//
// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Text style={{
//         fontFamily: 'Arial',
//         fontSize: 20,
//         paddingLeft: 5,
//         color: 'white',
//         fontWeight: 'bold'
//         }}
//       >EWAWE</Text>
//     );
//   }
// }
//
// class Homescreen extends Component{
//   static navigationOptions = {
//     headerLeft: <LogoTitle />,
//     headerStyle: {
//       backgroundColor: '#009798',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   };
//   render() {
//     return(
//       <View>
//         <Calculator />
//       </View>
//     );
//   }
// }
//
// class Appscreen  extends Component{
//   static navigationOptions = { title: 'Welcome', header: null };
// render() {
//   return(
//   <View style={{ flex: 1 }}>
//    <Logo style={{ flex: 1 }} />
//    <Forms style={{ flex: 1 }} />
//    <View style={{paddingLeft: 70, width: 250, height: 40, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
//    <Button
//     onPress={() => this.props.navigation.navigate('Home')}
//     color='#009798'
//     title="Login"
//    />
//    </View>
//   </View>
//   );
// }
// }
//
// const RootStack = StackNavigator(
//   {
//     Firstscreen: {
//       screen: Appscreen,
//     },
//     Home: {
//       screen: Homescreen,
//     },
//   },
//   {
//     initialRouteName: 'Firstscreen',
//   }
// );
//
// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

// import libraries to help create components
// import React, { Component } from 'react';
// import { View, Button, Text, TextInput } from 'react-native';
// import { Inputcalc, Numbers, Symbols } from './index';
// // create components
//
// class Calculator extends Component {
//   state = {
//
//   }
//   render () {
//   return (
//   <View style={styles.container}>
//    <View style={styles.container1}>
//    <Text style={styles.textStyling}>Principal Amount</Text>
//    <TextInput
//      style={{margin: 10, width: 250, height: 40, borderColor: '#009798', borderWidth: 2, textAlign:'center'}}
//      onChangeText={(text) => this.setState({text})}
//      value={this.state.text}
//      placeholder={this.props.placetext}
//      placeholderTextColor='#009798'
//      underlineColorAndroid='white'
//    />
//    <Text style={styles.textStyling}>Interest rate</Text>
//    <TextInput
//      style={{margin: 10, width: 250, height: 40, borderColor: '#009798', borderWidth: 2, textAlign:'center'}}
//      onChangeText={(text) => this.setState({text})}
//      value={this.state.text}
//      placeholder={this.props.placetext}
//      placeholderTextColor='#009798'
//      underlineColorAndroid='white'
//    />
//    <Text style={styles.textStyling}>Loan Period</Text>
//    <TextInput
//      style={{margin: 10, width: 250, height: 40, borderColor: '#009798', borderWidth: 2, textAlign:'center'}}
//      onChangeText={(text) => this.setState({text})}
//      value={this.state.text}
//      placeholder={this.props.placetext}
//      placeholderTextColor='#009798'
//      underlineColorAndroid='white'
//    />
//    </View>
//    <View style={styles.container2}>
//    <View style={styles.subcontainer21}>
//    <Button
//      onPress={() => alert("learn more")}
//      title="CALCULATE"
//      color="#009798"
//    />
//    </View>
//    <View style={styles.subcontainer22}>
//    <Button
//      onPress={() => alert("learn more")}
//      title="RESET"
//      color="#670000"
//    />
//    </View>
//    </View>
//    <View style={styles.container3}>
//     <Button
//       onPress={() => alert("learn more")}
//       title="VIEW AMORTIZATION"
//       color="#009798"
//     />
//    </View>
//   </View>
// );
// }
// }
//
// const styles = {
//     container: {
//       flexDirection: 'column',
//       justifyContent: 'flex-start',
//       flex: 1
//     },
//     container1: {
//       width: 325,
//       height: 350
//     },
//     container2: {
//       width: 325,
//       height: 70,
//       flexDirection: 'row',
//       justifyContent: 'flex-start'
//     },
//     container3: {
//       width: 325,
//       height: 70
//     },
//     textStyling: {
//       fontFamily: "Arial",
//       fontWeight: "bold",
//       fontSize: 16,
//       color: "#009798",
//       margin: 5
//     },
//     subcontainer21: {
//       width: 160,
//       height: 70,
//       margin: 2
//     },
//     subcontainer22: {
//       width: 160,
//       height: 70,
//       margin: 2
//     }
// };
//
// // make the created components available to other parts of the Apps
//
// export { Calculator };
//

// import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
// import { View, Text } from 'react-native';
// import { Button, Drawer } from 'native-base';
// import SideBar from './SideBar';
// import { Logo, Forms, Housecard, Calculator, Mortgagedeals } from './src/components/index';
//
// // loans is a page that returns Mortgagedeals
// class Loans extends Component {
//   static navigationOptions = {
//     headerLeft: <Text style={{ fontFamily: 'Arial', fontSize: 20, paddingLeft: 5, color: 'white', fontWeight: 'bold' }}>Mortgage Loans & Rates</Text>,
//     headerStyle: {
//       backgroundColor: '#009798',
//     },
//   }
//   render() {
//     return (
//       <View>
//       <Button
//         onPress={() => this.props.navigation.navigate('Home')}
//         title="Go back to homepage"
//       />
//       <Mortgagedeals />
//       </View>
//     );
//   }
// }
//
//
// // Calcs is a page that returns Calculator
// class Calcs extends Component {
//   static navigationOptions = {
//     headerLeft: <Text
//                     style={{
//                              fontFamily: 'Arial',
//                              fontSize: 20,
//                              paddingLeft: 5,
//                              color: 'white',
//                              fontWeight: 'bold'
//                           }}
//                 >
//                   Mortgage Calculator
//                 </Text>,
//     headerStyle: {
//       backgroundColor: '#009798',
//     },
//   }
//   render() {
//     return (
//       <View>
//       <Button
//         onPress={() => this.props.navigation.navigate('Fourscreen')}
//         title="View Mortage Deals"
//       />
//       <Calculator />
//       </View>
//     );
//   }
// }
//
//
// // Homescreen is a page that returns Housecard
// class Homescreen extends Component{
//   render() {
//     closeDrawer = () => {
//       this.drawer._root.close()
//     };
//     openDrawer = () => {
//       this.drawer._root.open()
//     };
//     return (
//       <Drawer
//         ref={(ref) => { this.drawer = ref; }}
//         content={<SideBar navigator={this.navigator} />}
//         onClose={() => this.closeDrawer()} >
//       <Housecard />
//       </Drawer>
//     );
//   }
// }
//
//
// // Appscreen is a page that returns a login screen
// class Appscreen  extends Component{
//     static navigationOptions = {
//        header: null
//     }
//
//     render() {
//       return(
//       <View style={{ flex: 1 }}>
//        <Logo style={{ flex: 1 }} />
//        <Forms style={{ flex: 1 }} />
//        <View style={{paddingLeft: 70, width: 250, height: 40, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
//        <Button
//         onPress={() => this.props.navigation.navigate('Home')}
//         style={{ width: 250, height: 40 }}
//         color='#009798'
//        >
//         <Text>Log in</Text>
//        </Button>
//        </View>
//       </View>
//       );
//     }
//     }
//
// // RootStack is a binder that holds every page together
// const RootStack = StackNavigator(
//   {
//     Firstscreen: {
//       screen: Appscreen,
//     },
//     Home: {
//       screen: Homescreen,
//     },
//     Thirdscreen: {
//       screen: Calcs,
//     },
//     Fourscreen: {
//       screen: Loans,
//     },
//   },
//   {
//     initialRouteName: 'Firstscreen',
//   }
// );
//
// // this is a Component that returns RootStack
// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
