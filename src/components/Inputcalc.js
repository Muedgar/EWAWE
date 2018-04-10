// Import libraries to help create components
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

// Create components

class Inputcalc extends Component {
  state = {

  }

  render() {
    return (
      <View>
       <Text>Principal Amount</Text>
       <TextInput
         style={{width: 250, height: 20, borderColor: '#009798', borderWidth: 2, textAlign:'center'}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder={this.props.placetext}
         placeholderTextColor='#009798'
         underlineColorAndroid='#ffffff00'
         caretHidden= "false"
       />
       <Text>Interest rate</Text>
       <TextInput
         style={{width: 250, height: 20, borderColor: '#009798', borderWidth: 2, textAlign:'center'}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder={this.props.placetext}
         placeholderTextColor='#009798'
         underlineColorAndroid='#ffffff00'
         caretHidden= "false"
       />
       <Text>Loan Period</Text>
       <TextInput
         style={{width: 250, height: 20, borderColor: '#009798', borderWidth: 2, textAlign:'center'}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder={this.props.placetext}
         placeholderTextColor='#009798'
         underlineColorAndroid='#ffffff00'
         caretHidden= "false"
       />
      </View>
    );
  }
}

// make it available to the other part of the app

export { Inputcalc };
