'use strict';

import React, {
	Text,
	View,
	Component,
	ListView,
	Image,
	StyleSheet
	} from 'react-native';
var moment = require('moment');

class PushPayload extends Component {

	constructor(props) {
		super(props);

		this.state = {

		};
	}

	componentDidMount() {
	}

	render() {
		return(
			<View
				style={{
					flex: 1,
					paddingTop: 80,
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<Image
					source={{uri: this.props.pushEvent.actor.avatar_url}}
					style={{
						height: 120,
						width: 120,
						borderRadius: 60
					}} />
				<Text style={{
					paddingTop: 20,
					paddingBottom: 20,
					fontSize: 20
				}}>
					{moment(this.props.pushEvent.created_at).fromNow()}
				</Text>
				<Text style={styles.bold}>{this.props.pushEvent.actor.login}</Text>
				<Text>{this.props.pushEvent.payload.description}</Text>
				<Text>at {this.props.pushEvent.repo.name}</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	bold: {
		fontWeight: '800',
		fontSize: 16
	}
});

module.exports = PushPayload;