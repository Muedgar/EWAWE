// import libraries to help create a components
import React from 'react';
import { View, Text, Button, Image } from 'react-native';

// create component

const Housecarddetail = () => (
    <View style={styles.container}>
     <View style={styles.subcontainer1}>
     <View style={styles.subsubcontainer1}>
       <Image style={{ width: 100, height: 100, margin: 5 }} source={require('./city.jpeg')} />
     </View>
     <View style={styles.subsubcontainer2}>
       <Text style={styles.text1}>Pre-paid access to any Regus Business</Text>
       <Text style={styles.text2}>Plot No. 6418, 14th Floor, Avenue Du Commerce</Text>
       <Text style={styles.text3}>~ FRw 65 833</Text>
       <Text style={styles.text4}>1 Rooms (total)</Text>
       <Text style={styles.text5}>50 Building Size (m²)</Text>
     </View>
     </View>
     <View style={styles.subcontainer2}>
       <Button
         onPress={() => alert("learn more")}
         title="View House"
         color="#009798"
       />
     </View>
    </View>
);

const styles = {
    container: {
      width: 300,
      height: 300,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      margin: 10,
      padding: 0
    },
    subcontainer1: {
      width: 300,
      height: 250,
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'flex-start'
    },
    subcontainer2: {
      width: 300,
      height: 50,
      padding: 5,
      paddingTop: 10.5
    },
    subsubcontainer1: {
      width: 120,
      height: 250,
      padding: 5
    },
    subsubcontainer2: {
      width: 170,
      height: 250,
      padding: 5
    },
    text1: {
      fontWeight: "bold",
      fontSize: 16,
      fontFamily: "Arial",
      color: "#333",
      margin: 2
    },
    text2: {
      fontWeight: "normal",
      fontSize: 10,
      fontFamily: "Arial",
      color: "#333",
      margin: 2
    },
    text3: {
      fontWeight: "bold",
      fontSize: 20,
      fontFamily: "Arial",
      color: "#333",
      margin: 2
    },
    text4: {
      fontWeight: "bold",
      fontSize: 10,
      fontFamily: "Arial",
      color: "#333",
      margin: 2
    },
    text5: {
      fontWeight: "bold",
      fontSize: 10,
      fontFamily: "Arial",
      color: "#333",
      margin: 2
    }
};

// make it available in the other parts of the app

export { Housecarddetail };
