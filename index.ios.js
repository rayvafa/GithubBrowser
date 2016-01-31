/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Login = require('./Login.js');

class GithubBrowser extends Component {
  render() {
    return (
	    <Login />
    );
  }
}

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
