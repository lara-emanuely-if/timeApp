import React from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import Header from './src/components/Header'
import PomodoroTimer from './src/components/PomodoroTimer'

export default class App extends React.Component {
  render() {
    return (
     

      <ScrollView style={styles}>
         <Image source={'.../assets/Logoo.png '} />
        <Header />
        <PomodoroTimer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});