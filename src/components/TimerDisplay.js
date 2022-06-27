import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	//exibe o timer em execução
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
<Image source={'./Header/logo.png'} />
export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
		marginTop: "50%",
	    marginBottom: "5%",
	    marginLeft: "10%",
	    marginRight: "10%",
	    padding: "15%",
	    borderColor: "white",
	    borderRadius: 80,
	    borderWidth: 9,
		alignItems: 'center',
		backgroundColor: "#F4B000"
	},
	textStyle: {
		color: "black",
	    fontSize: 50,

	}
})