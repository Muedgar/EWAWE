import React from 'react';
import { View, Button } from 'react-native';
import { Logo,Forms } from './index';

const Appscreen = () => (
  <View style={{ flex: 1 }}>
   <Logo style={{ flex: 1 }} />
   <Forms style={{ flex: 1 }} />
   <View style={{paddingLeft: 70, width: 250, height: 40, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
   <Button
    onPress={() => alert('This is a button!')}
    color='#009798'
    title="Login"
   />
   </View>
  </View>
);

export { Appscreen };
