import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity  } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';



class VerifyInfoScreen extends Component{
    render(){
        return (
            
            <View style={styles.container}>
                <View style={styles.titlesContainer}>
                    <Text style={styles.titleText}>Verify Your Information</Text>
                    <Text style={styles.subTitleText}>Verify and edit yout information if necessary</Text>
                </View>
                <View style={styles.formContainer}>
               
                    {/* <Madoka
                        label={'Name'}
                        // this is used as active and passive border color
                        borderColor={'#132aa9'}
                        labelStyle={{ color: '#132aa9' }}
                        inputStyle={{ color: '#777'}}
                    /> */}
                    <Text>Name</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10}}
                      //  placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />

                      <Text>First Name</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10,  marginBottom: 10}}
                       // placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                      <Text>Second Name</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10,  marginBottom: 10}}
                       // placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                      <Text>Birthday</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10}}
                        //placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                      <Text>Address</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10}}
                      //  placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />

                   
                  
                    {/* <Button title="Confirm"/> */}
                   
                </View>    
                <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text style={{color: 'white', fontSize: 15}}>CONFIRM</Text>
                        </TouchableOpacity>
                </View>
            </View>
      
        );
    }
} 

export default VerifyInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        height: 40,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        width: '100%', 

    },

});