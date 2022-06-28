import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
	render() {
		return(
      

    
			<View style={styles.headerContainer}>

				<Text style={styles.textStyle}> Bem-vindo(a) ao time!</Text>
        
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerContainer: {
    backgroundColor: "#F4B000",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    
    
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1.5,
    marginTop: 25,
    fontWeight: 'bold'
	

   
  }
})

export default Header;