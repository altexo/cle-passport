import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image  } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Madoka } from 'react-native-textinput-effects';
import LinearGradient from 'react-native-linear-gradient';


class VerifyInfoScreen extends Component{
    render(){
        return (
            
            <View style={styles.container}>
                <View style={styles.titlesContainer}>
                    <Text style={styles.titleText}>Verify Your Information</Text>
                    <Text style={styles.subTitleText}>Verify and edit yout information if necessary</Text>
                </View>
                <View style={styles.formContainer}>
               
                    <Madoka
                        label={'Name'}
                        // this is used as active and passive border color
                        borderColor={'#132aa9'}
                        labelStyle={{ color: '#132aa9' }}
                        inputStyle={{ color: '#777'}}
                    />
                   
                    <Madoka
                        label={'First Name'}
                        // this is used as active and passive border color
                        borderColor={'#132aa9'}
                        labelStyle={{ color: '#132aa9' }}
                        inputStyle={{ color: '#777' }}
                    />
                    <Madoka
                        label={'Second Name'}
                        // this is used as active and passive border color
                        borderColor={'#132aa9'}
                        labelStyle={{ color: '#132aa9' }}
                        inputStyle={{ color: '#777' }}
                    />
                    <Madoka
                        label={'Birthday'}
                        // this is used as active and passive border color
                        borderColor={'#132aa9'}
                        labelStyle={{ color: '#132aa9' }}
                        inputStyle={{ color: '#777'}}
                    />
                    <Madoka
                        label={'Address'}
                        // this is used as active and passive border color
                        borderColor={'#132aa9'}
                        labelStyle={{ color: '#132aa9' }}
                        inputStyle={{ color: '#777' }}
                    />
                    <Button title="Confirm"/>
                </View>    
                
            </View>
      
        );
    }
} 

export default VerifyInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: 'white',
    },
    titlesContainer:{
        flex: 0.5,
       // backgroundColor: 'green'
    },
    titleText:{
        fontSize: 25,
        textAlign: 'center'
    },
    subTitleText:{
        marginTop: 5,
        fontSize: 15,
        textAlign: 'center'
    },
    formContainer:{
        flex: 3,
       // backgroundColor: 'blue',
        padding: 16,
        // borderStyle: 'solid',
        // borderLeftWidth: Dimensions.get('window').width,
        // borderRightWidth: 0,
        // borderBottomWidth: 70,
        // borderLeftColor: 'transparent',
        // borderRightColor: 'transparent',
        // borderBottomColor: '#fff',

    },
    //Testing inputs
    triangle: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        backgroundColor: 'blue',
        borderStyle: 'solid',
        borderLeftWidth: Dimensions.get('window').width,
        borderRightWidth: 0,
        borderBottomWidth: 50,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
      },


});