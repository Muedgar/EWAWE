import React from 'react';
import { View, Text, Image } from 'react-native';

const Subtitle = ({ text }) => (
   <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
   </View>
);

const styles = {
     container: {
       width: 320,
       height: 70,
       marginTop: -30,
       flexDirection: 'row',
       justifyContent: 'center'
     },
     text: {
       fontFamily: 'Arial',
       fontSize: 10,
       color: '#009798',
       fontWeight: 'normal'
     }
}

export { Subtitle };
