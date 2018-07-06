import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity  } from "react-native";
import Modal from "react-native-modal";
import { createStackNavigator } from 'react-navigation';
import verifyidFront from '../verifyIdFront';
import verifyidBack from './verifyidBack';
import ScanIdFront from './ScanIdFront';
import ScanIdBack from './scanIdBack';
import scanidBackInstructions from './scanIdBackInstructions';
import scanidFrontInstructions from './scanIdFrontInstructions';

          



class ScanIdScreen extends Component{

  
    
    state = {
        isModalVisible: false,
        imageUri:{
            uri:''

      }}
    
    
  componentWillMount(){

   
          
    const params = this.props.navigation.state
    console.log('Params: ScanID ')
    console.log(params.params.uri)
    let imageURL = params.params.uri
    
    // //Test
    // let imageURL = 'content://media/external/images/media/21708'
    // //EndTest
    this.setState({imageUri:{
        uri: imageURL
      }
    });

    console.log('image uri')

    console.log(this.state.imageUri)

    
    
  }



    
      _toggleModal = () =>{

        this.setState({ isModalVisible: !this.state.isModalVisible });
      };
       

     handlepress = () =>{

        const { navigate } = this.props.navigation;
        this.setState({ isModalVisible: !this.state.isModalVisible });
            navigate('scanidInstructionsFront')    


     }

       
    
    render(){
        const { navigate } = this.props.navigation;
        return (
         
          

            <View style={styles.container}>
               <View style={styles.card}>
                    <View style={{flex: 0.8, alignItems: 'center',
        justifyContent:'center',}}>
                    <Image style={{width: 150, height:150}} source={this.state.imageUri}/>
                    </View>
                    <View style={{flex: 2}}>
                    <Modal isVisible={this.state.isModalVisible} style={{height: 100}}>
                        <View style={styles.modalContent}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('cle-passport/assets/icons/identificacion.png')}/>
                            <Text style={{marginLeft: '5%', fontSize: 23, marginTop: 0}}>ID Type</Text>
                        </View>
                        
                            <TouchableOpacity style={{}} onPress={ () => this.handlepress()} >

                                <Text style={{textAlign:'center', fontSize: 23, marginTop: '8%',marginBottom: '8%', borderWidth: 0.5,
    borderColor: 'black',}}>INE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._toggleModal}>
                                <Text style={{textAlign: 'right'}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginBottom: '5%', marginTop: '5%'}}>Clé Passport</Text>
                        <Text style={{fontSize: 20, textAlign: 'center'}}>      It looks your Clé passport is incomplete</Text>
                    </View>
               </View>
               <View style={{alignItems: 'stretch', height: 0.4}}>
                <TouchableOpacity style={styles.buttonStyles}  onPress={this._toggleModal}>
             
                    <Text style={{color: 'white', fontSize: 20}}>Scan Oficial ID</Text>
                </TouchableOpacity>
                
                {/* <Button style={{height: 90}} style={{position: 'absolute'}}title="Scan Oficial ID"/> */}
               </View>
               <View style={styles.detailsContainer}>
                <Text style={{color: '#0592fe', marginTop: '30%', fontSize: 20}}>Clé Benefits.</Text>
               </View>
               <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyles}  onPress={()=>navigate('ScannerQr')}>

                      <Image source={require('cle-passport/assets/icons/qr-code.png')} style={{marginRight: 6}} />
                      <Text style={{color: 'white', fontSize: 20}}>Scan QR Code</Text>
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
    modalContent: {
        backgroundColor: 'white',
        padding: 40,
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
});
createStackNavigator({
    IdFront:{screen:verifyidFront},
    IdBack:{screen:verifyidBack},
    scanFrontId:{screen:ScanIdFront},
    scanBackId:{screen:ScanIdBack},
    scanidInstructionsBack:{screen:scanidBackInstructions},
    scanidInstructionsFront:{screen:scanidFrontInstructions},
    
  
  });