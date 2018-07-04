import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,CameraRoll, TouchableOpacity,Alert  } from "react-native";
import { Constants, FileSystem, Camera, Permissions,ImageManipulator } from 'expo';
import { Dimensions } from 'react-native';
import Modal from "react-native-modal";
import Amplify, { Auth, Storage, API } from 'aws-amplify';
import aws_exports from '../.././src/aws-exports';
import store from './store.js';

Amplify.configure(aws_exports);


var imageFront = "";
class verifyidBack extends React.Component{


  state = {
    isModalVisible: false,
   }
    

        componentWillMount(){
    
          const params = this.props.navigation.state
          console.log('Params: verifyBackID')
          console.log(params.params)
          let imageURL = params.params.image2
           imageFront = params.params.image
     
          
          // Test
          // // let imageURL = 'content://media/external/images/media/21708'
          // // //EndTest
           this.setState({imageUri:{
              uri: imageURL
            }
           });
         
          
        }
        
       

         isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        _toggleModal = () =>{

          this.setState({ isModalVisible: !this.state.isModalVisible });
        };
         

        handlepress = (previousState,val)=>{

          this.setState(
          { text: previousState.text+val });
      }

    
    //   navigationPress = ()=>  {
    //     // setTimeout(function(){
    //     //   this._toggleModal()
    //     // }, 5000);
    // const { navigate } = this.props.navigation;
    // this._toggleModal()
    // setTimeout(function(){
 
      
    //   this.setState({ isModalVisible: !this.state.isModalVisible });
    //   navigate('infoVerify',this.props.navigation.state.params)    
 
    // }.bind(this), 3000);
  

    

     
      


    //   }




      componentDidMount() {
        this._cognitoSingIn();
       
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
        this._toggleModal()
        const customPrefix = {
            public: '02510593-F581-415F-A9A9-42E8ABD4FE58',
            protected: '02510593-F581-415F-A9A9-42E8ABD4FE58',
            private: '02510593-F581-415F-A9A9-42E8ABD4FE58'
        };


        let imagePath = "clePOC.png";

        fetch(imageFront).then((response => {
            response.blob().then(blob => {
                console.log('##### Vamos a subir la imagen: ' + imageFront);
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
                    vigencia: response.fields[7].value,
                    selfie: store.selfie
                };
                console.log(data);
                this.setState(data);

                this.setState({ isModalVisible: !this.state.isModalVisible });
                const { navigate } = this.props.navigation;
                 navigate('infoVerify',data) 
                

            }).catch(error => {
                console.log('Response Fail');
                console.log(error)
            });
        });}
     
  
    render(){
      
     
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
                        <View style={{alignItems:'center', height:30,width:30}}>
                        <Image style={{height:100,width:100,bottom:50}}  source={require('cle-passport/assets/images/loading.gif')}/>
                                
                           
                        </View>
                        
                           
                        <Text style={{textAlign:'center', fontSize: 23, marginTop: '8%',marginBottom: '8%', borderWidth: 0.5,
                               borderColor: 'black',}}>Verifying Info</Text>
                            
                          
                          
                        </View>
                    </Modal>
              <View style={{flex: 1,alignItems:'center'}}>
                <Text style={{flex:0.2,fontSize: 30,textAlign: 'center', }}>Check Your ID Back</Text>
                <Text style={{flex:0.2,fontSize: 20,textAlign: 'center',  }}>verify your ID photo is taken correctly      before we validate it</Text>
               

                       



              </View>
              <View style={styles.imageContainer}>
                <Image style={{width:300, height:150,bottom:50}} source={this.state.imageUri}/>       
              </View>
           
            
                            <View style={{flexDirection:'row'}}>

                    
            
 


                         

            <View style={{flex:1,right:2}} ><Button style={{width:400,height:150}}title='Retry' onPress={()=>navigate('scanBackId')}></Button></View>
             <View style={{flex:1,left:2}}><Button style={{height:60,height:150}} title='Continue' onPress={()=> this._uploadToAws()}></Button></View>


     

    </View>
  
            
          
            </View>
          );
          
    }
} 

export default verifyidBack

const styles = StyleSheet.create({
  container:{ 
    flex:1, 
    //justifyContent:'flex-start',
    alignItems:'center'
  },
  imageContainer:
  { flex:0.6, 
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    bottom:150
  
    
  
  
  },
  buttonContainer:
  {
    flex: 0.3,
    flexDirection: 'row' ,
    alignItems: 'stretch',
    width: '100%'
    
  },
  // buttonStyle:{
  //  position: 'absolute',
  //  bottom: 0,
  //  alignItems: 'stretch'
  //  // alignItems: 'flex-center'
  // },
  bottomView:{

    width: '100%', 
    height: 50, 
    backgroundColor: '#0592fe', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection: 'row' ,
    position: 'absolute',
    bottom: 0
  },

    
    
    
    
    
    
    });