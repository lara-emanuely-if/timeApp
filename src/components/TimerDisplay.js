import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	// display currently running timer
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
		marginTop: "10%",
	    marginBottom: "10%",
	    marginLeft: "7%",
	    marginRight: "7%",
	    padding: "15%",
	    borderColor: "white",
	    borderRadius: 800,
	    borderWidth: 9,
		alignItems: 'center',
	
		backgroundColor: "#F4B000"
	},
	textStyle: {
		color: "black",
	    fontSize: 50,

	}
})