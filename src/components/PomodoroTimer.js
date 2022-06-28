import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './Timer'

class PomodoroTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Working",
		}
	}

	//conclusão do timer

	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})	
		}
	}

	// é acionado na alteração do texto do timer
	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Defina um valor válido")
			this.setState({
				workTime: 25
			})
		}
	}

	// é acionado na alteração do texto do breaktimer
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Defina um valor válido")
			this.setState({
				breakTime: 5
			})
		}
	}

	// chamado para definir a hora do temporizador
	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
			<View>
			<View style={styles.row}>
				<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>Foco</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.workTime}  onChangeText={this.handleWorkTime} />
			</View>
					
				<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>Descanso</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime}onChangeText={this.handleBreakTime} />
			</View>

				</View>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
			</View>
			)
	}
}
export default PomodoroTimer;

const styles = StyleSheet.create({
   row: {
    flex: 1,
    flexDirection: "row",
	
  },
  inputWrap: {
    flex: 1,
    marginBottom: 10,

  },
  textStyle: {
    fontSize: 20,
    letterSpacing: 1.5,
    marginTop: 10,
    padding: 10,
	fontWeight: 'bold',
	


	

  }
});