import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ThumbnailComponent, Title, Subtitle } from './index';

class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Title text="EWAWE" />
       <ThumbnailComponent src={require('./logo.png')} />
       <Subtitle text='"OWN YOUR HOME"' />
      </View>
    );
  }
}

const styles = {
   container: {
     flexDirection: 'column',
     justifyContent: 'space-between'
   }
}

export { Logo };
