import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, { Auth, Storage, API } from 'aws-amplify';
import aws_exports from '../.././src/aws-exports';
import { RNS3 } from 'react-native-aws3';

Amplify.configure(aws_exports);


var imageUri = "";
class VerifyInfoScreen extends Component {

    componentWillMount() {
        const params = this.props.navigation.state;
        console.log('        Params: verifyInfo                                                    ');
        console.log(params.params);
        imageUri = params.params.image;
        this.setState({name:''});

    }
    componentDidMount() {
        this._cognitoSingIn();
        this._uploadToAws();
    }

    _cognitoSingIn = () => {
        const username = 'justino';
        const password = 'mris092dk02!2"A';
        Auth.signIn(username, password)

            .then(//user => console.log('User: ', user),
                Auth.currentCredentials().then(token => {
                    console.log('############### essentials!!');
                    
                    console.log('Primero el token: ', token)
                    accessKeyId = token.accessKeyId;
                    secretKey = token.data.Credentials.SecretKey;
                    console.log('AccessKey: ', accessKeyId)
                    console.log('SecretKey: ', secretKey)
                })

                
            ).catch(err => console.log('Err ', err));
    }





   
    _uploadToAws = () => {
        const customPrefix = {
            public: '02510593-F581-415F-A9A9-42E8ABD4FE58',
            protected: '02510593-F581-415F-A9A9-42E8ABD4FE58',
            private: '02510593-F581-415F-A9A9-42E8ABD4FE58'
        };


        let imagePath = "clePOC.png";

        fetch(imageUri).then((response => {
            response.blob().then(blob => {
                console.log('##### Vamos a subir la imagen: ' + imageUri);
                Storage.put(imagePath, blob, { level: 'private', customPrefix:customPrefix, 
                identityId: new String('') })
                .then((result) => {
                    console.log("Imágen subida");
                    console.log(result);
                    this._getData(result.key);
                   
                })

                .catch(
                    (e) => {
                        console.log('Fallo al subir imagen ' + e);
                    }
                );


                
        





            });
        }));
    }

    _getData = (imagePath) => {
        let apiName = "Cle API";
        let path = '/services/organization/02510593-F581-415F-A9A9-42E8ABD4FE58/ocr'; 
        console.log('Analizar: ' + imagePath);
        Auth.currentSession().then(cognitoSession => {
            let idToken = cognitoSession.idToken.jwtToken;
            let accessToken = cognitoSession.accessToken.jwtToken;
            console.log("ID Token:");
            console.log(idToken);
            console.log("Acces Token");
            console.log(accessToken);
            

            let params = {
                // si la imagen es: 02510593-F581-415F-A9A9-42E8ABD4FE58/imagenPrueba.png
                //el image path del body, solo debería ser imagenPrueba.png
                body: {"category":"OFFICIAL_ID","subcategory":"INE","size":"1","entries":[{"name":"what?","index":0,"file":{"type":"image","name":imagePath,"mode":"download"}}]},
            
                headers: {
                    Authenticate: idToken,
                    "Content-Type": 'application/json'
                }
            }
            
            API.post(apiName, path, params).then(response => {
                console.log('Response OK');
                console.log(response);
                let data = {name: response.fields[0].value,
                    fechaNac: response.fields[1].value,
                    sexo: response.fields[2].value,
                    domicilio: response.fields[3].value,
                    clave: response.fields[4].value,
                    curp: response.fields[5].value,
                    emision: response.fields[6].value,
                    vigencia: response.fields[7].value
                };
                console.log(data);
                this.setState(data);
                

            }).catch(error => {
                console.log('Response Fail');
                console.log(error)
            });
        });

    }

    render() {

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
                    <TouchableOpacity style={styles.buttonStyles}>
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