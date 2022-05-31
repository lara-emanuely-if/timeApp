import React from 'react';
import { Text, View, Image, Button, Alert} from 'react-native';



export default function Home() {

    return (

    <><View style={styles.container}>
            <Image style={styles.imagem} source={require('./assets/logo.png')} />

        </View><View>
                <Button
                    buttonStyle={styles.button}
                    title="Iniciar"
                    color='#FFB800'
                    onPress={() => Alert.alert('Tudo pronto?')} />

            </View></>

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
  
   
  });
  
  
  
  