import React from 'react';
import { View } from 'react-native';
import { Inputtext } from './index';

const Forms = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <Inputtext placetext="username or email" />
    <Inputtext placetext="password" />
  </View>
);

export { Forms };
