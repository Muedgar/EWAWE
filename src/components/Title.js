import React from 'react';
import { View, Text, Image } from 'react-native';

const Title = ({ text }) => (
   <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
   </View>
);

const styles = {
     container: {
       width: 320,
       height: 120,
       paddingTop: 75,
       flexDirection: 'row',
       justifyContent: 'center'
     },
     text: {
       fontFamily: 'serif',
       fontSize: 30,
       color: '#009798',
       fontWeight: 'normal'
     }
}

export { Title };
