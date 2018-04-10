import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

const Loansandrates = () => {
  return (
      <View style={styles.container}>
       <View style={styles.container1}>
        <ScrollView style={{ width: 170, height: 170 }}>
         <Image style={{ width: 170, height: 170, margin: 2 }} source={require('./city.jpeg')} />
         <Image style={{ width: 170, height: 170, margin: 2 }} source={require('./city.jpeg')} />
         <Image style={{ width: 170, height: 170, margin: 2 }} source={require('./city.jpeg')} />
         <Image style={{ width: 170, height: 170, margin: 2 }} source={require('./city.jpeg')} />
         <Image style={{ width: 170, height: 170, margin: 2 }} source={require('./city.jpeg')} />
         <Image style={{ width: 170, height: 170, margin: 2 }} source={require('./city.jpeg')} />
         </ScrollView>
         <Text style={styles.textStyling}>Interest rate 18%</Text>
         <Text style={styles.textStyling}>Down Payment 50%</Text>
       </View>
       <View style={styles.container2}>
       <Text style={styles.textStyling2}>Bank of kigali</Text>
       <Text style={styles.textStyling2}>Type of Mortgage:</Text>
       <Text style={styles.textStyling2}>Home loan</Text>
       </View>
      </View>
   );
};

const styles = {
    container: {
      width: 350,
      height: 210,
      margin: 5,
      padding: 5,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    container1: {
      width: 175,
      height: 200
    },
    textStyling: {
      fontFamily: 'Arial',
      fontSize: 12,
      paddingTop: 2,
      paddingLeft: 5,
      color: '#009798',
      fontWeight: 'bold'
    },
    textStyling2: {
      fontFamily: 'Arial',
      fontSize: 16,
      paddingLeft: 5,
      marginTop: 5,
      color: '#009798',
      fontWeight: 'bold'
    },
    container2: {
      width: 175,
      height: 200,
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
}

export { Loansandrates };
