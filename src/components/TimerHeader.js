import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Working")
		{
			if(this.props.running === true) {
				return "Continue trabalhando duro!"
			}
			else {
				return "Hora de trabalhar!"
			}	
		}
		else {
			if(this.props.running === true) {
				return "É hora do intervalo! "
			}
			else {
				return "Relaxe um tiquin :)"
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.textStyle}>{texttoshow}</Text>
		)				
	}
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    letterSpacing: 1,
    marginTop: 40,
    padding: 20,

  }
});

export default TimerHeader;