import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,Button  } from "react-native";

class scanidFrontInstructions extends Component{

 componentDidMount() {

  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT)
 
}

handlePress = () => {
    const { navigate } = this.props.navigation;
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_LEFT)
    navigate('scanFrontId')


}
    



    render(){
        return (
             
            <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Scan your ID</Text>
              <Text style={{flex:1,fontSize:20,top:20}}>instructions....</Text>
              </View>
            <View style={styles.logoContainer}>  
              <View style={styles.imageContainer}>
                <Image source={require('cle-passport/assets/images/cle-logo.jpeg')} style={{width:300, height: 200,resizeMode: Image.resizeMode.contain}}/>
              </View>      
            </View>
            <View style={styles.bodyContainer}>
              
              <View style={styles.instructionContainer}><Text style={styles.welcomeText}>why should i scan my ID?</Text>
              </View>     
            </View>
            <View style={styles.indicatorContainer}>
              
            </View>   
            <View style={styles.buttonContainer}>
     
            <View style={styles.buttonContainer}>
            <Button style={styles.singupButton} 
             icon={require('cle-passport/assets/icons/user-plus.svg')}
              title="start capture"
              onPress={() =>this.handlePress()
              
                
              }
            />
   
          </View>
        
            </View>
          
          </View>
        );
    }
} 

export default scanidFrontInstructions

const styles = StyleSheet.create({
    container:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
    logoContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    imageContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    bodyContainer:{ flex:3, backgroundColor: '#FFFFFF',width:'100%',justifyContent:'flex-start',alignItems:'center'},
    titleContainer:{ flex:2, backgroundColor: '#FFFFFF',width:'70%',justifyContent:'flex-start',alignItems:'center'},
    titleText:{fontSize:30, top:20},
    instructionContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center',top:40},
    welcomeText:{fontSize:20 , bottom:70,textAlign: 'center',color: 'blue'},
    indicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    welcomeindicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch'},
    imgIndicator:{width:50,height:50},
    buttonContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',width:'90%',alignItems:'stretch',bottom:30,left:10},
    singupButton:{ flex:1, backgroundColor: '#c9c9c9',justifyContent:'center' ,alignItems:'center', height: 70},
});