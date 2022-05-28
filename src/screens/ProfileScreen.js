import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native';

export default class PrfileScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Profile',
    }

    render () {
        return (
            <View style={{flex: 1, justifyContent:'center'}}>
               
             <View style={{alignItems: 'center'}}>
             <Text style={{fontSize:50}}>Tela perfil</Text>
             
             </View>
            </View>
        );

    }
    }
