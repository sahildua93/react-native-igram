import React, { Component, Fragment } from 'react';
import TabNavigator from './tabNavigations';
import Header from '../header';
class App extends Component {
  render() {
    return(
      <Fragment>
        <Header />
        <TabNavigator />
      </Fragment>
    )
  }
}
export default App;