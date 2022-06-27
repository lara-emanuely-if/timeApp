import React from 'react';
import { StyleSheet, Text} from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Working")
		{
			if(this.props.running === true) {
				return "Não desista hein? Você é capaz!"
			}
			else {
				return "Preparado(a)? Se sim, já clica ai em começar :)"
				
			}	
		}
		else {
			if(this.props.running === true) {
				return "Intervalo... Relaxa aí abençoado!!"
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
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 20,
    padding: 20,
	


  }
});

export default TimerHeader;