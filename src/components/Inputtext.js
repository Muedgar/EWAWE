import React, { Component } from 'react';
import { Input, Item } from 'native-base';

class Inputtext extends Component {
  state = {

  }

  render() {
    return (
      <Item regular>
      <Input
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
        placeholder={this.props.placetext}
        placeholderTextColor='#009798'
      />
      </Item>
    );
  }
}

export { Inputtext };
