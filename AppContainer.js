'use strict';

import React, {
	Text,
	View,
	StyleSheet,
	Component,
	TabBarIOS
	} from 'react-native';

class AppContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 'feed'
		};
	}

	render(){
		return(
			<TabBarIOS style={styles.container}>
				<TabBarIOS.Item
					title="feed"
					selected={this.state.selectedTab == 'feed'}
					icon={require('image!inbox')}
					onPress={() => {
						this.setState({selectedTab: 'feed'})
					}}>
					<Text style={styles.welcome}>Tab 1</Text>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="search"
					selected={this.state.selectedTab == 'search'}
					icon={require('image!inbox')}
					onPress={() => {
						this.setState({selectedTab: 'search'})
					}}>
					<Text style={styles.welcome}>Tab 2</Text>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
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


module.exports = AppContainer;