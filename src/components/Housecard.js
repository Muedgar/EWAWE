// import libraries to help create a components
import React, { Component } from 'react';
import { ScrollView, View, TextInput } from 'react-native';
import { Housecarddetail } from './index';

// create component

class Housecard extends Component {
  state = {

  }
  render() {
  return (
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
       <View style={styles.container}>
         <TextInput
           style={styles.inputStyle}
           onChangeText={(text) => this.setState({ text })}
           value={this.state.text}
           placeholder="Location"
           placeholderTextColor='#009798'
           underlineColorAndroid='white'
         />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Minimum Price"
          placeholderTextColor='#009798'
          underlineColorAndroid='white'
        />
         <TextInput
         style={styles.inputStyle}
         onChangeText={(text) => this.setState({ text })}
         value={this.state.text}
         placeholder="Maximum Price"
         placeholderTextColor='#009798'
         underlineColorAndroid='white'
         />
       </View>
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       <Housecarddetail />
       </View>
      </ScrollView>
    );
  }
}

const styles = {
   container: {
      width: 350,
      height: 100,
      marginTop: 70,
      marginBottom: 40,
      flexDirection: 'column',
      justifyContent: 'center'
   },
   inputStyle: {
     margin: 10,
     width: 250,
     height: 40,
     borderColor: '#009798',
     borderWidth: 2,
     textAlign: 'center'
   }
};

// make it available in the other parts of the app

export { Housecard };
