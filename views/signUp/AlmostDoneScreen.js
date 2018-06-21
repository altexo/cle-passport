import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Button  } from "react-native";

class AlmosDoneScreen extends Component{

  componentWillMount(){
          
    const params = this.props.navigation.state
    console.log('Params: AlmostDone ')
    console.log(params.params)
    let imageURL = params
    
    // //Test
    // let imageURL = 'content://media/external/images/media/21708'
    // //EndTest
    this.setState({imageUri:{
        uri: imageURL
      }
    });
    
  }



    render(){
      const { navigate } = this.props.navigation;
        return (
      
            <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Almost done</Text>
              </View>
             
            <View style={styles.logoContainer}>  

              <View style={styles.imageContainer}>
                <Image source={require('cle-passport/assets/images/cle-logo.jpeg')} style={{width:300, height: 200,resizeMode: Image.resizeMode.contain}}/>
              </View>      
            </View>
           
            <View style={styles.bodyContainer}>
              
              <View style={styles.instructionContainer}><Text style={styles.welcomeText}>to prove your name and age, you should provide your official ID document</Text>
              </View>     
            </View>
           
            <View style={styles.indicatorContainer}>
              
            </View>   
        
            <View style={styles.buttonContainer}>
     
            <Button title='Continuar' onPress={()=>navigate('scanID',this.props.navigation.state.params)}></Button>
            </View>
          
          </View>
       
       
        );
    }
} 

export default AlmosDoneScreen

const styles = StyleSheet.create({
    container:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
    logoContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    imageContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    bodyContainer:{ flex:3, backgroundColor: '#FFFFFF',width:'100%',justifyContent:'flex-start',alignItems:'center'},
    titleContainer:{ flex:2, backgroundColor: '#FFFFFF',width:'70%',justifyContent:'flex-start',alignItems:'center'},
    titleText:{fontSize:40, top:20},
    instructionContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center',top:30},
    welcomeText:{fontSize:16 , bottom:70,textAlign: 'center'},
    indicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    welcomeindicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch'},
    imgIndicator:{width:50,height:50},
    buttonContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',width:'90%',alignItems:'stretch',bottom:30},
    singupButton:{ flex:1, backgroundColor: '#c9c9c9',justifyContent:'center' ,alignItems:'center', height: 70},
});