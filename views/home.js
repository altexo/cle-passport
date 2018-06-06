import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

 






const HomeView = class HomeScreen extends React.Component {
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>  
            <View style={styles.imageContainer}>
              <Image source={require('cle-passport/assets/images/cle-logo.jpeg')} style={{width:300, height: 200,resizeMode: Image.resizeMode.contain}}/>
            </View>      
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Tagline Cle</Text>
            </View>
            <View style={styles.instructionContainer}><Text style={styles.welcomeText}>welcom screen instructions</Text>
            </View>     
          </View>
          <View style={styles.indicatorContainer}>
            <View style={styles.welcomeindicatorContainer}>
            <Image style={styles.imgIndicator}
                  source={require('cle-passport/assets/icons/three-dots-more-indicator.png')}
        />
            
            </View>  
          </View>   
          <View style={styles.buttonContainer}>
            <Button style={styles.singupButton} 
             icon={require('cle-passport/assets/icons/user-plus.svg')}
              title="Sing Up"
              onPress={() =>
                navigate('Terms')
              }
            />
   
          </View>
        
        </View>
      );
    }
  }
const styles = StyleSheet.create({
container:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
logoContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
imageContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
bodyContainer:{ flex:3, backgroundColor: '#FFFFFF',width:'100%',justifyContent:'flex-start',alignItems:'center'},
titleContainer:{ flex:1, backgroundColor: '#FFFFFF',width:'70%',justifyContent:'center',alignItems:'center'},
titleText:{fontSize:40, top:20},
instructionContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch'},
welcomeText:{fontSize:16 , bottom:70},
indicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
welcomeindicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch'},
imgIndicator:{width:50,height:50},
buttonContainer:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'center',width:'90%',alignItems:'stretch',bottom:30},
singupButton:{ flex:1, backgroundColor: '#c9c9c9',justifyContent:'center' ,alignItems:'center', height: 70},










});

  export default HomeView;