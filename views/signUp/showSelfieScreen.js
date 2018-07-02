import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,CameraRoll, TouchableOpacity  } from "react-native";
import { Constants, FileSystem, Camera, Permissions,ImageManipulator } from 'expo';
class showSelfieScreen extends React.Component{


        componentWillMount(){
          
          const params = this.props.navigation.state
          console.log('Params: ')
          console.log(params.params)
          let imageURL = params.params
          
          // //Test
          // let imageURL = 'content://media/external/images/media/21708'
          // //EndTest
          this.setState({imageUri:{
              uri: imageURL
            }
          });
          
        }


        handlepress = ()=>{
          const { navigate } = this.props.navigation;
         
       
          console.log('show selfie test')
          console.log( this.props.navigation)
          
          navigate('pin', this.props.navigation.state.params)


         
      }

     
  
    render(){
     
      
      const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
              <View style={{flex: 0.2}}>
                <Text style={{fontSize: 30}}>Your profile photo</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image style={{width: 400, height:330, transform: [{ scaleX: -1 }]}} source={this.state.imageUri}/>       
              </View>
           
         
              <View style={{flexDirection:'row'}}>
            
 


                         

                      <View style={{flex:1,right:2}} ><Button style={{width:400,height:150}}title='Retry' onPress={()=>navigate('TakeSelfieWelcome')}></Button></View>
                       <View style={{flex:1,left:2}}><Button style={{height:60,height:150}} title='Continue' onPress={()=>this.handlepress()}></Button></View>


               

              </View>
            
          
            </View>
          );
          
    }
} 

export default showSelfieScreen

const styles = StyleSheet.create({
    container:{ 
      flex:1, 
      //justifyContent:'flex-start',
      alignItems:'center'
    },
    imageContainer:
    { flex:2, 
      alignItems: 'center',
    
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