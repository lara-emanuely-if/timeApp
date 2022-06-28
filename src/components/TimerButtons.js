import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class TimerButtons extends React.Component {
	state = {};


	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.container}>
				
				<TouchableOpacity style={styles.buttonStyle} onPress={this.props.pause}>
						<Text style={styles.buttonText}>Pausa</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.buttonStyle} onPress={this.props.reset}>
						<Text style={styles.buttonText}>Reset</Text>
				</TouchableOpacity>
				</View>
			)
		}
		else
		{
			return(
				<View  style={styles.container}>
				
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.play}>
						<Text style={styles.buttonText}>Começar</Text>
					</TouchableOpacity>

				</View>
			)
		}
	}
}

const styles=StyleSheet.create({
	
	container:{
	flex: 1,
	flexDirection: "row" ,

	justifyContent: 'space-evenly',


		
	},
	buttonStyle:{
	alignItems: "center",
	backgroundColor: "#F4B000",
	padding: 20,
	flexDirection: "row" ,
	borderRadius: 20,
	fontWeight: 'bold'
	}, 
	
	buttonText: {
	color: "black",
	fontSize: 20,
	fontWeight: 'bold'
	
	 

  	}
})

export default TimerButtons