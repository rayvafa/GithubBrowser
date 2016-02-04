'use strict';

import React, {
	Text,
	View,
	Component,
	ListView
	} from 'react-native';

class Feed extends Component {

	constructor(props) {
		super(props);

		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});

		this.state = {
			dataSource: ds,
			showProgress: true
		};
	}

	componentDidMount(){
		this.fetchFeed();
	}

	fetchFeed(){
		require('./AuthService').getAuthInfo((err, authInfo) => {
			var url = 'https://api.github.com/users/'
				+ authInfo.user.login
				+ '/received_events';

			fetch(url, {
				header: authInfo.header
			}).then((response) => {
				return response.json();
			}).then((responseData) => {
				var feedItems = responseData.filter((ev)=> {
					return ev.type === 'CreateEvent';
				});
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(feedItems),
					showProgress: false
				});
			})
		});
	}

	renderRow(rowData){
		return (
			<Text
				style={{
					color: '#333',
					alignSelf: 'center'
				}}>
				{rowData.actor.login}
			</Text>
		);
	}

	render(){
		return(
			<View style={{
				flex: 1,
				justifyContent: 'flex-start'
			}}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}
}

module.exports = Feed;