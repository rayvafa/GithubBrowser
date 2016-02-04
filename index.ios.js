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
var AppContainer = require('./AppContainer.js');
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
				<AppContainer />
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
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
