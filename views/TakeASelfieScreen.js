import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button  } from "react-native";

class TakeASelfieScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.logoContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Take a Selfie</Text>
                </View>  
              <View style={styles.instructionContainer}><Text style={styles.welcomeText}>press the button to start capturing</Text>
                </View>     
              </View>
              <View style={styles.bodyContainer}>
      
              <View style={styles.CircleShapeView}>
              <Image style={styles.imgIndicator}
                  source={require('cle-passport/assets/icons/camera.png')}/>
              </View>
                
                 
              <Text style={styles.whyShouldIText}>why should I take a selfie?</Text>
              </View>
              <View style={styles.indicatorContainer}>
                <View style={styles.welcomeindicatorContainer}>

                </View>  
              </View>   

          
            </View>
          );
    }
} 

export default TakeASelfieScreen;

const styles = StyleSheet.create({
    container:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
    logoContainer:{ flex:5, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    imageContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    bodyContainer:{ flex:3, backgroundColor: '#FFFFFF',width:'100%',justifyContent:'flex-start',alignItems:'center',bottom:200},
    titleContainer:{ flex:1, backgroundColor: '#FFFFFF',width:'70%',justifyContent:'center',alignItems:'center',bottom:80},
    titleText:{fontSize:40, top:20},
    instructionContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch',bottom:100},
    welcomeText:{fontSize:16 , bottom:80},
    indicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    welcomeindicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch',bottom:40},
    imgIndicator:{width:50,height:50},
    buttonContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',width:'90%',alignItems:'stretch',bottom:30},
    singupButton:{ flex:1, backgroundColor: '#c9c9c9',justifyContent:'center' ,alignItems:'center'},
    CircleShapeView: {
        width: 75,
        height: 75,
        borderRadius: 150/2,
        backgroundColor: '#00BCD4',
        justifyContent:'center',alignItems:'center'
        
    },
 
    
    
    
    
    
    
    
    
    
    
    });