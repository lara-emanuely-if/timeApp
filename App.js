import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
 



 



export default function App() {


  return (
    <View style={styles.container}>
     
    <Image style={styles.imagem}source={require('./assets/logo.png')}/>

    <Button 
    buttonStyle={styles.button}
    title="Iniciar"
    color='#FFB800'
   
    onPress={() => Alert.alert('Tudo pronto?')}
  
  
 
    />

  
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002EAD',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  imagem: {
    width: 150,
    height: 150
  },

  

});


