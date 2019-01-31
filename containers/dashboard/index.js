import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight, StyleSheet, FlatList } from 'react-native';
import DataList from './dataList';

class Dashboard extends Component {

  _onPressItem = () => {console.log('item pressed')};

  _renderItem = ({ item }) => (
    <DataList
      id={ item.id }
      onPressItem={ this._onPressItem }
      item={ item }
    />
  );

  render() {
    const { userData } = this.props;
    console.log('user data==>', userData);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={ userData }
          keyExtractor={ (item, index) => `${item.id}-${index}` }
          renderItem={ this._renderItem }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
  userData: state.dashboard.data,
});

const mapDispatchToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);