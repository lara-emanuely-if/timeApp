import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';



export default function Conta() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadrasto = () => {
    alert(nome);
    alert(email);
    alert(senha);

  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadrasto</Text>
    <StatusBar hidden />

  

     <TextInput placeholder="Digite seu nome" style={styles.textInput} onChange={text=>setNome(text)}/>
     <TextInput placeholder="Digite sue email" style={styles.textInput} onChange={text=>setEmail(text)}/>
     <TextInput secureTextEntry={true} placeholder="Digite sua senha" style={styles.textInput} onChange={text=>setSenha(text)}/>
   
    <TouchableOpacity style={styles.btnCadrasto} onPress={()=>cadrasto()}>
      <Text style={{color:'black', textAlign:'center'}}>Cadrastar</Text>
    </TouchableOpacity>
    
    </View>
 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002EAD',
    alignItems: 'center',
    justifyContent:'center',
    padding:20
  },
 
  textInput: {
    width: '100%',
    height: 40,
    paddingLeft:10,
    borderRadius:20,
    backgroundColor: 'white',
    color: 'white'
  },

  btnCadrasto: {
    width: '100%',
    height: 40,
    backgroundColor: 'yellow',
    borderRadius:20,
    justifyContent: 'center'
    
    
  },

});

  
 