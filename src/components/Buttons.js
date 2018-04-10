import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

const Buttons = () => (
  <View style={{ paddingLeft: 70, width: 250, height: 40, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
  <Button
   onPress={() => this.props.navigation.navigate('Home')}
   color='#009798'
  >
  <Text>Log in</Text>
  </Button>
  </View>
);

export { Buttons };
