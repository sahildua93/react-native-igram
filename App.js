import React, {Component} from 'react';
import { View, Text, WebView } from 'react-native';
import htmlContent from './constants';

export default class App extends Component {


    render()     {
      return (
          <WebView
              originWhitelist={['*']}
              automaticallyAdjustContentInsets
              source={{ html: htmlContent }}
              style={{flex: 1}}
              mixedContentMode='always'
          />
    );
    }
}
