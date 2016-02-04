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

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	render() {
		if(this.state.isLoggedIn){
			return (
				<View style={styles.container}>
					<Text style={styles.welcome}>Logged In!</Text>
				</View>
			);
		} else {
			return (
				<Login onLogin={this.onLogin} />
			);
		}
	}

	onLogin() {
		console.log('onLogin');
		this.setState({isLoggedIn: true});
	}
}

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flex: 1,
		paddingTop: 40,
		alignItems: 'center',
		padding: 10
	}
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
