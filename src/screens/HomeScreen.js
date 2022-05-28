import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native';

export default class homeScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Home',
    }

    render () {
        return (
            <View style={{flex: 1, justifyContent:'center'}}>
               
             <View style={{alignItems: 'center'}}>
             <Text style={{fontSize:50}}>Tela inicial</Text>
             
             </View>
            </View>
        );

    }
    }
