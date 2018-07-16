import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, CameraRoll, TouchableOpacity, Alert } from "react-native";
import { Constants, FileSystem, Camera, Permissions, Asset, ImageManipulator } from 'expo';
import { Dimensions } from 'react-native';
import Modal from "react-native-modal";
import Amplify, { Auth, Storage, API } from 'aws-amplify';
import aws_exports from '../.././src/aws-exports';
import store from './store.js';
import { Buffer } from 'buffer';
import moment from 'moment';

Amplify.configure(aws_exports);


var imageFront = "";
var ImageSelfie = "";
let imagePathFront = "clePOC.jpg";
let imagePathSelfie = 'Selfie.jpg'
const dateRegexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
class verifyidBack extends React.Component {


    state = {
        isModalVisible: false,
    }


    componentWillMount() {

        const params = this.props.navigation.state
        console.log('Params: verifyBackID')
        console.log(params.params)
        let imageURL = params.params.image2
        imageFront = params.params.image
        imageSelfie = params.params.image3
        this.setState({
            imageUri: {
                uri: imageURL
            }
        });

    }

    _processImages = async () => {
        console.log('Processing image');
        const idImage = await ImageManipulator.manipulate(
            imageFront,
            [{ resize: { width: 800, height: 600 } }],
            { format: 'png', compress: 0.7, base64: true }
        );

        const selfieImage = await ImageManipulator.manipulate(
            imageSelfie,
            [{ resize: { width: 800, height: 600 } }],
            { format: 'png', compress: 0.7, base64: true }
        );
        this.setState({ idImage, selfieImage });
    }



    isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };

    _toggleModal = () => {

        this.setState({ isModalVisible: !this.state.isModalVisible });
    };


    handlepress = (previousState, val) => {

        this.setState(
            { text: previousState.text + val });
    }

    componentDidMount() {
        this._cognitoSingIn();

    }

    _cognitoSingIn = () => {
        const username = 'justino';
        const password = 'mris092dk02!2"A';
        Auth.signIn(username, password)
            .then(
                Auth.currentCredentials().then(token => {
                    console.log('Primero el token: ', token)
                    accessKeyId = token.data.Credentials.AccessKeyId;
                    secretKey = token.data.Credentials.SecretKey;
                    sessionToken = token.data.Credentials.SessionToken
                    this.setState({ accessKeyId, secretKey, sessionToken });
                    console.log('AccessKey: ', accessKeyId)
                    console.log('SecretKey: ', secretKey)
                })
            ).catch(err => console.log('Err ', err));
    }

    _uploadToAws = () => {
        this._toggleModal();
        this._processImages().then(() => {
            const customPrefix = {
                public: '02510593-F581-415F-A9A9-42E8ABD4FE58',
                protected: '02510593-F581-415F-A9A9-42E8ABD4FE58',
                private: '02510593-F581-415F-A9A9-42E8ABD4FE58'
            };
            const idBuffer = Buffer.from(this.state.idImage.base64, 'base64');
            const selfieBuffer = Buffer.from(this.state.selfieImage.base64, 'base64');
            console.log('Subir la imagen: ' + imageFront);
            Storage.put(imagePathFront, idBuffer, {
                level: 'private', customPrefix: customPrefix,
                identityId: new String('')
            }).then((result) => {
                console.log("Imágen subida");
                console.log(result);
                this._getData(result.key);
                Storage.put(imagePathSelfie, selfieBuffer, { level: 'private', customPrefix:customPrefix, 
                         identityId: new String('') })
                         .then((callback) => {
                             console.log("Imágen subida");
                             console.log(callback.key);
                            })
                            .catch(
                                (e) => {
                                    console.log('Fallo al subir imagen de Selfie: ' + e);
                                }
                            );
            }).catch((error)=>{
                console.log('Fallo al subir imagen de identificación: ' + e);
            });
        });
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
                body: { "category": "OFFICIAL_ID", "subcategory": "INE", "size": "1", "entries": [{ "name": "what?", "index": 0, "file": { "type": "image", "name": imagePath, "mode": "download" } }] },

                headers: {
                    Authenticate: idToken,
                    "Content-Type": 'application/json'
                }
            }

            API.post(apiName, path, params).then(response => {
                console.log('Response OK');
                console.log(response);
                var age = this.getAge(response.fields[1].value);
                console.log('age')
                console.log(age)
                let data = {
                    name: response.fields[8].value,
                    firstSurname: response.fields[9].value,
                    secondSurname: response.fields[10].value,
                    fechaNac: response.fields[1].value,
                    sexo: response.fields[2].value,
                    domicilio: response.fields[3].value,
                    clave: response.fields[4].value,
                    curp: response.fields[5].value,
                    emision: response.fields[6].value,
                    vigencia: response.fields[7].value,
                    selfie: store.selfie,
                    age: age
                };
                let nameToVerify = `${data.firstSurname} ${data.secondSurname} ${data.name}`;

                this._VerifyData(imagePathFront, imagePathSelfie, nameToVerify)
                console.log(data);


                this.setState({ data: data });



            }).catch(error => {
                console.log('Response Fail');
                console.log(error)
            });
        });
    }

    _VerifyData = (imagePathFrontP, imagePathSelfieP, name) => {

        let apiName = "Cle API";
        let path = '/services/organization/02510593-F581-415F-A9A9-42E8ABD4FE58/identity-verification';
        console.log('Analizar ruta ine: ' + imagePathFrontP);
        console.log('Analizar ruta selfie: ' + imagePathSelfieP);
        Auth.currentSession().then(cognitoSession => {
            let idToken = cognitoSession.idToken.jwtToken;
            let accessToken = cognitoSession.accessToken.jwtToken;
            console.log("ID Token:");
            console.log(idToken);
            console.log("Acces Token");
            console.log(accessToken);


            let params = {
                body: { 'claimedIdentity': { 'fullName': name, 'faceImage': { 'type': 'IMAGE', 'extension': 'JPG', 'url': imagePathSelfieP, 'name': imagePathSelfieP, 'mode': 'DOWNLOAD' }, 'hasOrganizationRecord': true }, 'document': { 'category': 'OFFICIAL_ID', 'subcategory': 'INE', 'size': 1, 'createDate': '1993-02-08T00:00:00', 'updateDate': '1993-02-08T00:00:00', 'entries': [{ 'index': 0, 'name': 'FRONT', 'file': { 'type': 'IMAGE', 'extension': 'JPG', 'url': imagePathFrontP, 'name': imagePathFrontP, 'Mode': 'DOWNLOAD' } }] } },

                headers: {
                    Authenticate: idToken,
                    "Content-Type": 'application/json'
                }
            }

            API.post(apiName, path, params).then(response => {
                console.log('Response OK - Verify info');
                console.log(response);
                this.setState({ isModalVisible: !this.state.isModalVisible });
                if(response.details.length === 0) {
                    Alert.alert(
                        'Validation Complete',
                        'The face and fullname are from the same person',
                        [
                          {text: 'OK', onPress: () => {
                            const { navigate } = this.props.navigation;
                            navigate('infoVerify', this.state.data)
                          }},
                        ],
                        { cancelable: false }
                      );

                } else {
                    Alert.alert(
                        'Validation Complete',
                        response.details[0],
                        [
                          {text: 'OK', onPress: () => {
                            const { navigate } = this.props.navigation;
                            navigate('infoVerify', this.state.data)
                          }},
                        ],
                        { cancelable: false }
                      );
                }
            }).catch(error => {
                console.log('Response Fail - Verify info');
                Alert.alert(
                    'Validation Error',
                    'Error validating person',
                    [
                      {text: 'OK', onPress: () => {
                        const { navigate } = this.props.navigation;
                        navigate('infoVerify', this.state.data)
                      }},
                    ],
                    { cancelable: false }
                  )
                console.log(error)
            });
        });
    }

    getAge = (birth) => {
        if (birth.match(dateRegexp)) {
            console.log('Valid Date');
            let nowDate = moment().format('YYYY/MM/DD');
            let birthDate = moment(birth, 'DD/MM/YYYY');
            var years = moment().diff(birthDate, 'years');
        } else {
            console.log('Invalid Date');
            years = 0;
        }
        return years;
    }




    render() {


        return (
            <View style={styles.container}>


                <Modal isVisible={this.state.isModalVisible} >
                    <View style={{
                        backgroundColor: 'white',
                        padding: 40,
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        borderRadius: 4,
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                    }}>
                        <View style={{ alignItems: 'center', height: 30, width: 30 }}>
                            <Image style={{ height: 100, width: 100, bottom: 50 }} source={require('cle-passport/assets/images/loading.gif')} />


                        </View>


                        <Text style={{
                            textAlign: 'center', fontSize: 23, marginTop: '8%', marginBottom: '8%', borderWidth: 0.5,
                            borderColor: 'black',
                        }}>Verifying Info</Text>



                    </View>
                </Modal>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ flex: 0.2, fontSize: 30, textAlign: 'center', }}>Check Your ID Back</Text>
                    <Text style={{ flex: 0.2, fontSize: 20, textAlign: 'center', }}>Verify your ID photo is taken correctly      before we validate it.</Text>






                </View>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 300, height: 150, bottom: 50 }} source={this.state.imageUri} />
                </View>


                <View style={{ flexDirection: 'row' }}>








                    <View style={{ flex: 1, right: 2 }} ><Button style={{ width: 400, height: 150 }} title='Retry' onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('scanBackId')
                    }
                    }></Button></View>
                    <View style={{ flex: 1, left: 2 }}><Button style={{ height: 60, height: 150 }} title='Continue' onPress={() => this._uploadToAws()}></Button></View>




                </View>



            </View>
        );

    }
}

export default verifyidBack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent:'flex-start',
        alignItems: 'center'
    },
    imageContainer:
    {
        flex: 0.6,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        bottom: 150




    },
    buttonContainer:
    {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%'

    },
    // buttonStyle:{
    //  position: 'absolute',
    //  bottom: 0,
    //  alignItems: 'stretch'
    //  // alignItems: 'flex-center'
    // },
    bottomView: {

        width: '100%',
        height: 50,
        backgroundColor: '#0592fe',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },







});