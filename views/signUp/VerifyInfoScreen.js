import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, { Auth, Storage, API } from 'aws-amplify';
import aws_exports from '../.././src/aws-exports';
import { RNS3 } from 'react-native-aws3';

Amplify.configure(aws_exports);


var imageUri = "";
class VerifyInfoScreen extends Component {
    state ={
        name: '',
        text: '',
        fechaNac: '',
        domicilio: ''
    }
    componentWillMount() {
        const params = this.props.navigation.state;
        console.log('        Params: verifyInfo                                                    ');
        console.log(params.params);
        imageUri = params.params.image;
        this.setState({name:''});

    }
   

    

    render() {
        const { navigate } = this.props.navigation;
        const params = this.props.navigation.state;
       
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
                        style={{ height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10 }}
                        //  placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({ name })}
                        value={this.state.name}
                    />

                    <Text>First Name</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{ height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10 }}
                        // placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Text>Second Name</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{ height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10 }}
                        // placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Text>Birthday</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{ height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10 }}
                        //placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({ fechaNac })}
                        value={this.state.fechaNac}
                    />
                    <Text>Address</Text>
                    <TextInput underlineColorAndroid="transparent"
                        style={{ height: 40, borderWidth: 0.5, borderColor: 'black', padding: 10, marginBottom: 10 }}
                        //  placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({ domicilio })}
                        value={this.state.domicilio}
                    />



                    {/* <Button title="Confirm"/> */}

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=> navigate('screenLast',params.params) }>
                        <Text style={{ color: 'white', fontSize: 15 }}>CONFIRM</Text>
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
    titlesContainer: {
        flex: 0.5,
        // backgroundColor: 'green'
    },
    titleText: {
        fontSize: 25,
        textAlign: 'center'
    },
    subTitleText: {
        marginTop: 5,
        fontSize: 15,
        textAlign: 'center'
    },
    formContainer: {
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

    buttonContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#0592fe',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
    },
    buttonStyles: {
        backgroundColor: '#0592fe',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',

    },

});