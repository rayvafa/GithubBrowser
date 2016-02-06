'use strict';

import React, {
	Text,
	View,
	Component,
	ListView,
	ActivityIndicatorIOS,
	TouchableHighlight,
	Image
	} from 'react-native';

class SearchResults extends Component {

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

	componentDidMount() {
		this.doSearch();
	}

	doSearch(){
		var url = 'https://api.github.com/search/repositories?q=' +
			encodeURIComponent(this.props.searchQuery);
	}

	renderRow(rowData) {
		return (
			<TouchableHighlight
				underlayColor='#ddd'>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					padding: 20,
					alignItems: 'center',
					borderColor: '#D7D7D7',
					borderBottomWidth: 1
				}} >

				</View>
			</TouchableHighlight>
		);
	}

	render() {

		if (this.state.showProgress) {
			return (
				<View style={{
					flex: 1,
					justifyContent: 'center'
				}}>
					<ActivityIndicatorIOS
						size='large'
						animating={true}
					/>
				</View>
			);
		}

		return (
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

module.exports = SearchResults;