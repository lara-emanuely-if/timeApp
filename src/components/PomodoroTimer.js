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

	// handles completion of timer
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Tempo"
			})
		}
		else
		{
			this.setState({
				intervalType: "Pausa"
			})	
		}
	}

	// gets triggered on change of worktimer text
	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				workTime: 25
			})
		}
	}

	// gets triggered on change of breaktimer text
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				
			})
		}
		else
		{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				pausa: 5
			})
		}
	}

	// called to set the timer's time
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
			
			
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
		
			)
	}
}
export default PomodoroTimer;

const styles = StyleSheet.create({
  	
  textStyle: {
    fontSize: 20,
    letterSpacing: 1.5,
    marginTop: 30,
    padding: 15,

  }
});