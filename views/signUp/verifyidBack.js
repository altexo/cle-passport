import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,CameraRoll, TouchableOpacity  } from "react-native";
import { Constants, FileSystem, Camera, Permissions,ImageManipulator } from 'expo';
import { Dimensions } from 'react-native';
class verifyidBack extends React.Component{


    
    

        componentWillMount(){
          const dim = Dimensions.get('screen');
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
          console.log(dim)
          
        }

         isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        

        handlepress = (previousState,val)=>{

          this.setState(
          { text: previousState.text+val });
      }
     
  
    render(){
      
   
        return (
            <View style={styles.container}>
              <View style={{flex: 0.5,alignItems:'center'}}>
                <Text style={{flex:0.2,fontSize: 30,textAlign: 'center', }}>Check Your ID</Text>
                <Text style={{flex:0.2,fontSize: 20,textAlign: 'center', }}>verify your ID photo is taken correctly      before we validate it</Text>
              
              </View>
              <View style={styles.imageContainer}>
                <Image style={{width:300, height:150}} source={this.state.imageUri}/>       
              </View>
           
              {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{color: 'white', textAlign: 'center'}}>RETRY</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{color: 'white', textAlign: 'center'}}>CONTINUE</Text>
                  </TouchableOpacity>
                  <Button style={{height:60,width: '100%'}} title="Retry"/>
                  <Button style={{height:60,width: '100%'}} title="continue"/>
              </View> */}
              <View style={ styles.bottomView}>
            
 
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{color: 'white', textAlign: 'right'}}>RETRY</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{color: 'white', textAlign: 'left'}}>CONTINUE</Text>
                  </TouchableOpacity>

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
    { flex:0.7, 
      alignItems: 'flex-start',
      justifyContent:'flex-start',
      bottom:100
    
      
    
    
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