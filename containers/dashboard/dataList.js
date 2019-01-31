import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class DataList extends Component {
 render() {
   const { item } = this.props;
   return(
     <View style={{ flex: 1, backgroundColor: 'red' }}>
      <View style={{ flexDirection: 'column', backgroundColor: 'red' }}>
        <View style={{ backgroundColor: 'green' }}>
          <Text>{ item.name }</Text>
        </View>
        <View style={{ backgroundColor: 'blue' }}>
          <Text>image</Text>
        </View>
        <View style={{ backgroundColor: 'green' }}>
          <Text>like & date</Text>
        </View>
        <View style={{ backgroundColor: 'yellow' }}>
          <Text>{ item.description }</Text>
        </View>
      </View>
     </View>
   )
 }
}

const styles = StyleSheet.create({

});

export default DataList;