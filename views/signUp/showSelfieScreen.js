
    


import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,CameraRoll  } from "react-native";

class showSelfieScreen extends React.Component{


        componentWillMount(){
      
            console.log('just checking', this.props.navigation.state)
           
            CameraRoll.getPhotos({
              first: 1,
            })
            .then(r => {
              this.setState({ photos: r.edges });
              console.log(this.state.photos)
            })
            .catch((err) => {
               //Error Loading Images
            });

     
        }
  
  
    render(){
      const {params} = this.props.navigation.state
        return (
            <View style={styles.container}>
              <View style={styles.logoContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Take a Selfie</Text>
                </View>  
              <View style={styles.instructionContainer}><Text style={styles.welcomeText}>{params}</Text>
                </View>    
              </View>
              <Image style={{flex: 1,flexDirection:'row', alignItems:'center', justifyContent: 'center'}} source={this.state.photos.node.image.uri}/>       

            
          
            </View>
          );
          
    }
} 

export default showSelfieScreen

const styles = StyleSheet.create({
    container:{ flex:2, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
    logoContainer:{ flex:5, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center',width:'100%'},
    imageContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
    bodyContainer:{ flex:6, backgroundColor: '#c9c9c9',width:'90%', height:'100%',justifyContent:'flex-start',alignItems:'center',bottom:200},
    titleContainer:{ flex:1, backgroundColor: '#FFFFFF',width:'70%',justifyContent:'center',alignItems:'center',bottom:80},
    titleText:{fontSize:40, top:20},
    instructionContainer:{ flex:5, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch',bottom:100,width:'100%',left:20},
    welcomeText:{fontSize:16 , bottom:80},
    indicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
    welcomeindicatorContainer:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'stretch',bottom:40},
    imgIndicator:{width:50,height:50},

    
    
    
    
    
    
    
    
    
    });