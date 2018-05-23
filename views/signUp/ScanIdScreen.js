import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet  } from "react-native";
=======
import { View, Text, StyleSheet, Button, Image  } from "react-native";
>>>>>>> develop

class ScanIdScreen extends Component{
    render(){
        return (
<<<<<<< HEAD
            <View>
                <Text>Welcome Screen</Text>
=======
            <View style={styles.container}>
               <View style={styles.card}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                    <Image
                        source={require('cle-passport/assets/icons/user.svg')}
                    />
                    </View>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                    </View>
               </View>
               <View style={{alignItems: 'stretch', height: 90}}>
                <Button style={{position: 'absolute'}}title="Scan Oficial ID"/>
               </View>
               <View style={styles.detailsContainer}>
               </View>
               <View style={styles.buttonContainer}>
               </View>
>>>>>>> develop
            </View>
        );
    }
} 

<<<<<<< HEAD
=======

>>>>>>> develop
export default ScanIdScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
<<<<<<< HEAD
        alignItems: 'center',
        justifyContent: 'center'
=======
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    card:{
        flex: 1,
        backgroundColor: '#d9dada',
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    detailsContainer:{
        flex: 3
    },
    buttonContainer:{
        flex: 1
>>>>>>> develop
    }
});