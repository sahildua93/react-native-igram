import React, { Component } from 'react';
import { AsyncStorage, View } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthRoutes from '../containers/navigations';
import Login from '../containers/login';
import { showLoader, hideLoader } from '../actions/common.action';
import { setToken } from '../actions/auth.action';

class GateKeeper extends Component {

  state = { isLoggedIn: false };

  componentWillMount() {
    this.props.showLoader();
    this._retrieveData();
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.token) {
      AsyncStorage.removeItem('token');
      this.setState({ isLoggedIn: false });
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        this.props.hideLoader();
        this.props.setToken(value);
        this.setState({ isLoggedIn: true });
      }
    } catch (error) {
      console.log('Error', error);
      this.props.hideLoader();
      this.setState({ isLoggedIn: false });
    }
  };

  _setToken = async () => {
    const tempToken = 'storing temp token.';
    const { showLoader, hideLoader, setToken } = this.props;
    try {
      showLoader();
      await AsyncStorage.setItem('token', tempToken);
      hideLoader();
      setToken(tempToken);
      this.setState({ isLoggedIn: true });
    } catch (error) {
      this.setState({ isLoggedIn: false });
      hideLoader();
    }
  };

  render() {
    const { isLoggedIn } = this.state;
    const { token } = this.props;
    const showContent = (isLoggedIn || token ) ? <AuthRoutes /> : <Login setToken={ this._setToken } />;
    return(
      showContent
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    token: reduxState.authentication.token,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    showLoader: bindActionCreators(showLoader, dispatch),
    hideLoader: bindActionCreators(hideLoader, dispatch),
    setToken: bindActionCreators(setToken, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GateKeeper);