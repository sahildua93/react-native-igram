import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableHighlight, StyleSheet, AsyncStorage, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { removeToken } from '../../actions/auth.action';

class Profile extends React.Component {

  _removeToken = () => this.props.removeToken();

  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={ styles.circleContainer }>
          <View style = { styles.circle } />
          <View style={ styles.textContainer }>
            <Text style={ styles.textHeader }>Sahil Dua</Text>
            <Text style={ styles.text }>sahil.dua@tothenew.com</Text>
          </View>
        </View>
        <View style={{ flex: 1}}>
          <LinearGradient
            colors={[ '#b01e7a', '#8c358e' ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={ styles.gradientContainer }
          >
            <TouchableHighlight
              style={ styles.loginBtnContainer }
              underlayColor={ "#b01e7a" }
              onPress={ this._removeToken }
            >
              <Text style={ styles.loginText }> Log out </Text>
            </TouchableHighlight>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradientContainer: {
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
    borderWidth: 0.4,
  },
  loginBtnContainer: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.4,
  },
  loginText: {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 16
  },
  circleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor:'lightgrey',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  textHeader: {
    fontSize: 30,
  },
  text: {
    fontSize: 15,
  }
});

const mapDispatchToProps = dispatch => ({
  removeToken: bindActionCreators(removeToken, dispatch),
});

export default connect(null, mapDispatchToProps)(Profile);