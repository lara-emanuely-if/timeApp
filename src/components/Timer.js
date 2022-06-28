import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import TimerHeader from './TimerHeader'
import TimerDisplay from './TimerDisplay'
import TimerButtons from './TimerButtons'
import {Vibration} from 'react-native'

class Timer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			running: false,
			time: this.props.period * 60
		}
	}

	// é chamado quando um fluxo de novas props chega do componente pai
	componentWillReceiveProps(nextProps) {
    	this.setState({ running: false, time: nextProps.period * 60 });
		if(this.state.running === true && this.state.time == 0)
		{
			this.handlePlay()
		}
	  }

	render() {
		return (
			<View>
				<TimerHeader
					running={this.state.running}
					intervalType={this.props.intervalType}
				/>
				<TimerDisplay
					time={this.state.time}
				/>
				<TimerButtons
					play={this.handlePlay}
					pause={this.handlePause}
					reset={this.handleReset}
					running={this.state.running}
				/>
			</View>
		)
	}

	// Chamado imediatamente após a atualização ocorrer
	componentDidUpdate() {
		if(this.state.running === true && this.state.time == 0)
		{
			clearInterval(this.timerId)
			Vibration.vibrate([500, 500, 500])
			this.props.Oncomplete()

		}
		else if(this.state.running === false)
		{
			clearInterval(this.timerId)
		}
	}

	// é acionado quando o botão iniciar é pressionado
 	handlePlay = () => {
		this.setState({
			running: true
		})
		this.timerId = setInterval(() =>{
			this.setState({
				time: this.state.time - 1
			})
		}, 1000)
	}

//é acionado quando o botão Pause é pressionado

	handlePause = () => {
		clearInterval(this.timerId)
		this.setState({
			running: false
		})
	}

	// é acionado quando o botão Reset é pressionado
	handleReset = () => {	
		clearInterval(this.timerId)
		this.setState({
			running: false,
			time: this.props.period * 60
		})
	}
}

export default Timer;

const styles = StyleSheet.create({
  textStyle: {
    color: "#C2362B",
    fontSize: 25,
    letterSpacing: 1.5,

  
  }
});