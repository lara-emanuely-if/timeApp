import React from 'react';
import {View, Image, Button, Alert, StyleSheet } from 'react-native';


export default function Home({ navigation }) {
  return (
    <>
      <View style={styles.container}>
     
      </View>
      <View>
        <Button
          buttonStyle={styles.button}
          title="Iniciar"
          color='#FFB800'
          onPress={() => Alert.alert('Tudo pronto?')} />
   
   
  
 

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002EAD',
    alignItems: 'center',
  },
  imagem: {
    width: 140,
    height: 140,
    marginTop: '10%'
  },
  textInput: {
    width: '100%',
    height: 40,
    marginTop: '10%',
    borderRadius:20
  },
});