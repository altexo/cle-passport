import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity  } from "react-native";

class ScanIdScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
               <View style={styles.card}>
                    <View style={{flex: 0.8, alignItems: 'center',
        justifyContent:'center',}}>
                    <Image style={{}}
                        source={require('cle-passport/assets/icons/baseline_account_box_black_48dp.png')}
                    />
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginBottom: '5%', marginTop: '5%'}}>Clé Passport</Text>
                        <Text style={{fontSize: 20, textAlign: 'center'}}>It look your Clé passport is incomplete</Text>
                    </View>
               </View>
               <View style={{alignItems: 'stretch', height: 0.4}}>
                <TouchableOpacity style={styles.buttonStyles}>
                    <Text style={{color: 'white', fontSize: 20}}>Scan Oficial ID</Text>
                </TouchableOpacity>
                {/* <Button style={{height: 90}} style={{position: 'absolute'}}title="Scan Oficial ID"/> */}
               </View>
               <View style={styles.detailsContainer}>
                <Text style={{color: '#0592fe', marginTop: '30%', fontSize: 20}}>Clé Benefits</Text>
               </View>
               <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyles}>
                    <Image/><Text style={{color: 'white', fontSize: 20}}>Scan QR Code</Text>
                </TouchableOpacity>
               </View>
            </View>
        );
    }
} 

export default ScanIdScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    card:{
        flex: 1,
       // backgroundColor: '#d9dada',
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    detailsContainer:{
        flex: 3,
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonContainer:{
        width: '100%', 
        height: 50, 
        backgroundColor: '#0592fe', 
        alignItems: 'center',
        flexDirection: 'row' ,
        position: 'absolute',
        bottom: 0,
        justifyContent:'center',
    },
    buttonStyles:{
        backgroundColor: '#0592fe',
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',

    },
});