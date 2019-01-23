import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import InputText from '../../components/textInput';

class Login extends Component  {
  state = {
    username: '',
    password: '',
    error: ''
  };

  onTextChange = (value, name) => {
    const { error } = this.state;
    this.setState({
      [ name ]: value,
      error: error === `${name}Error` ? '' : error });
  };

  validate = () => {
    const { username, password } = this.state;
    const { setToken } = this.props;
    if(!username.trim()) {
      this.setState({ error: 'usernameError' });
    } else if (!password.trim()){
      this.setState({ error: 'passwordError' });
    } else {
      // alert('Both are filled');
       setToken(username, password);
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <LinearGradient
        colors={[ '#b01e7a', '#8c358e' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={ styles.gradientContainer }
      >
        <View style={ styles.container }>
          <Text style={ styles.heading }>Igram</Text>
          <InputText
            name={ 'username' }
            style={{...styles.textInput }}
            placeholder={ "Username" }
            value={ username }
            placeholderTextColor={ "#ffffff" }
            onChange={ this.onTextChange }
            error={ error }
            errorText={' Username is required '}
            errorStyle={ styles.error }
          />
          <InputText
            name={ 'password' }
            style={{ ...styles.textInput, marginTop: 5 }}
            value={ password }
            placeholder={ "Password" }
            placeholderTextColor={ "#ffffff" }
            onChange={ this.onTextChange }
            errorText={' Password is required '}
            error={ error }
            errorStyle={ styles.error }
          />
          <TouchableHighlight
            style={ styles.loginBtnContainer }
            underlayColor={ "#b01e7a" }
            onPress={ this.validate }
          >
            <Text style={ styles.loginText }> Log in </Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  gradientContainer: {
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  heading: {
    fontSize: 50,
    color: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 35,
    fontFamily: 'cursive',
  },
  textInput: {
    backgroundColor: '#b1549d',
    borderRadius: 5,
    marginBottom: 12,
    color: '#ffffff',
    height: 44,
    paddingLeft: 15,
  },
  loginBtnContainer: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b01e7a',
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: '#ffffff',
    marginTop: 12
  },
  loginText: {
    color: '#ffffff',
    fontFamily: 'sans-serif',
  },
  error: {
    color: '#f70418',
    marginTop: 0,
    marginBottom: 5,
    fontFamily: 'sans-serif',
  }
});

export default Login;