import React from 'react';
import { View, Text, Image } from 'react-native';
import { Thumbnail } from 'native-base';

const ThumbnailComponent = ({ src }) => (
  <View style={styles.container}>
    <Thumbnail large source={src} />
  </View>
);

const styles = {
    container: {
      width: 320,
      height: 100,
      paddingTop: -50,
      flexDirection: 'row',
      justifyContent: 'center'
    }
};

export { ThumbnailComponent };
