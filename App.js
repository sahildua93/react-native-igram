import React, {Component} from 'react';
import { Provider } from 'react-redux';
import GateKeeper from './components/gateKeeper';
import configureStore from './store';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <GateKeeper />
      </Provider>
  );
  }
}

