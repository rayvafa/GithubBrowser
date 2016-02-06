'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	} from 'react-native';
var SearchResults = require('./SearchResults.js');

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render(){
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Search Query"
					onChangeText={ (text) => this.setState({searchQuery: text}) }
				/>
				<TouchableHighlight
					onPress={this.onSearchPressed.bind(this) }
					style={styles.button}>
					<Text style={styles.buttonText}>Search</Text>
				</TouchableHighlight>
			</View>
		);
	}

	onSearchPressed() {
		console.log('onSearchPressed: ' + this.state.searchQuery);
		this.props.navigator.push({
			component: SearchResults,
			title: 'Results',
			passProps: {
				searchQuery: this.state.searchQuery
			}
		});
	}
}

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flex: 1,
		paddingTop: 100,
		alignItems: 'center',
		padding: 10
	},
	logo: {
		width: 66,
		height: 55
	},
	heading: {
		fontSize: 30,
		marginTop: 10
	},
	input: {
		height: 50,
		marginTop: 10,
		padding: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48bbec'
	},
	button: {
		height: 50,
		backgroundColor: '#48BBEC',
		alignSelf: 'stretch',
		marginTop: 10,
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center'
	}
});

module.exports = Search;