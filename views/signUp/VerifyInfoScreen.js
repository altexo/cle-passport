import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity  } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from '../.././src/aws-exports';

Amplify.configure(aws_exports);
var accessKeyId = "";
var secretKey = "";

const options = {
  keyPrefix: "02510593-F581-415F-A9A9-42E8ABD4FE58/",
  bucket: "stage-organization-documents",
  region: "us-west-2",
  // accessKey: token.accessKeyId,
  // secretKey: token.data.Credentials.secretKey,
  successActionStatus: 201
}
class VerifyInfoScreen extends Component{

    componentWillMount(){
    
        const params = this.props.navigation.state
        console.log('        Params: verifyInfo                                                    ')
        console.log(params.params)
       
    
        
      }














    _cognitoSingIn = () =>{
        const username = 'justino';
        const password = 'mris092dk02!2"A'; 
      Auth.signIn(username, password)
      
        .then(//user => console.log('User: ', user),
          Auth.currentCredentials(credentials => {
          const tokens = Auth.essentialCredentials(credentials);
          console.log('Estos son los tokens: ',tokens)
        }).then(token => {
          console.log('Primero el token: ', token)
          accessKeyId = token.accessKeyId;
          secretKey = token.data.Credentials.SecretKey;
          console.log('AccessKey: ', accessKeyId)
          console.log('SecretKey: ', secretKey)
          }
          
        )
      )
        .catch(err => console.log('Err ', err));
      }
      _cognitoConfirmSignIn = () => {
        Auth.confirmSignIn(user, code)
          .then(data => console.log('ConfirmSignInData: ', data))
          .catch(err => console.log('ConfirmSignInErr: ', err));
      }

    render(){
        this._cognitoSingIn();
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