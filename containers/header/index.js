import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Igram</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5
  },
  text: {
    fontSize: 28,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    color: '#000000',
  }
});

export default Header;