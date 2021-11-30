import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class AdaloCompnent extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Text>Video player will not work in the web</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default AdaloCompnent