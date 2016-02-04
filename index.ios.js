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
	View,
	ActivityIndicatorIOS
	} from 'react-native';
var Login = require('./Login.js');
var AuthService = require('./AuthService.js');

class GithubBrowser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			checkingAuth: true
		};
	}

	componentDidMount() {
		AuthService.getAuthInfo((err, authInfo) => {
			this.setState({
				checkingAuth: false,
				isLoggedIn: authInfo != null
			});
		});
	}

	render() {
		if(this.state.checkingAuth){
			return(
				<View style={styles.container}>
					<ActivityIndicatorIOS
						animating={true}
						size='large'
						style={styles.loader}
					/>
				</View>
			);
		}

		if(this.state.isLoggedIn){
			return (
				<View style={styles.container}>
					<Text style={styles.welcome}>Logged In!</Text>
				</View>
			);
		} else {
			return (
				<Login onLogin={this.onLogin.bind(this)} />
			);
		}
	}

	onLogin() {
		this.setState({
			isLoggedIn: true
		});
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
