import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class Dashboard extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default Dashboard;