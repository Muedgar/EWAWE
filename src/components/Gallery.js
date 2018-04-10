// import libraries to help create a components
import React, Component from 'react';
import { View, Text, Image, Button } from 'react-native';

// create component

const Gallery = () => (
      <View style={{styles.container}}>
       <View style={{styles.container1}}>
         <View style={{styles.imageholder1}}>
          <View>
           <Button
             onPress={() => alert("learn more")}
             title="Prev"
             color="#333"
           />
           <Image source={require('./.......')} />
           <Button
             onPress={() => alert("learn more")}
             title="Next"
             color="#333"
           />
          </View>
         </View>
       </View>
       <View style={{styles.container2}}>
         <View style={{styles.imageholder2}}>
          <View>

          </View>
         </View>
       </View>
      </View>
    );

const styles = {
   container: {
     flex: 1
   },
   container1: {
     flex: 4
   },
   imageholder1: {
     flex: 1
   }
   container2: {
     flex: 2
   },
   imageholder2: {
     flex: 1
   }
}

// make it available in the other parts of the app

export { Housecard };
