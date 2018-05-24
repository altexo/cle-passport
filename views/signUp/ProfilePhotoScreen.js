import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button  } from "react-native";

class ProfilePhotoScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.logoContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Your Pofile Photo</Text>
                </View>  
              </View>
              <View style={styles.bodyContainer}>
            
    
              </View>
              
            
              <Image style={styles.imgIndicator}
                  source={require('cle-passport/assets/icons/correct.png')}
        />
              
              <Text style={styles.welcomeText}>Correct!</Text>

              <View style={{ flexDirection: 'row', justifyContent:'space-between',alignItems:'flex-end'}}>
              <Button style={styles.singupButton1} 
              title="Retry"
              onPress={() =>
                navigate('Profile', { name: 'Jane' })
              }
            />
             <Button style={styles.singupButton2} 
              title="Continue"
              onPress={() =>
                navigate('Profile', { name: 'Jane' })
              }
            />
              
              
              </View>
              

          
            </View>
          );
    }
} 

export default ProfilePhotoScreen

const styles = StyleSheet.create({
    container:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
    logoContainer:{ flex:5, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center',width:'100%',bottom:30},
    imageContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    bodyContainer:{ flex:6, backgroundColor: '#c9c9c9',width:'90%', height:'100%',justifyContent:'flex-start',alignItems:'center',bottom:200},
    titleContainer:{ flex:1, backgroundColor: '#FFFFFF',width:'70%',justifyContent:'center',alignItems:'center',bottom:80},
    titleText:{fontSize:40, top:20},
    instructionContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch',bottom:100,width:'100%',left:20},
    welcomeText:{fontSize:16 , bottom:190},
    indicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
    welcomeindicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch',bottom:40},
    imgIndicator:{width:30,height:30,bottom:190},
    singupButton1:{  backgroundColor: '#c9c9c9',justifyContent:'space-between' ,alignItems:'center',left:20},
    singupButton1:{  backgroundColor: '#c9c9c9',justifyContent:'space-between' ,alignItems:'center',right:20},

    


    
    
    
    
    
    
    
    
    
    });