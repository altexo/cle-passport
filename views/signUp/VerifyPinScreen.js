import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,TextInput,TouchableWithoutFeedback,TouchableHighlight  } from "react-native";
 
 
 
class NumberButton extends Component{
 
 
render(){
    return(<View style={styles.number1}><Text>{this.props.id}</Text></View>)
}
 
}
 
 
 
 
 
class VerifyPinScreen extends Component{
    
        
        state = { text: '' }
    
  
handlepress = (previousState,val)=>{

    this.setState(
    { text: previousState.text+val });
}
Deletepress = (previousState)=>{

    var str = previousState.text.substring(0, previousState.text.length-1);
    console.log(str)
    this.setState(
    { text: str });
}
    

      render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}> Confirm a PIN for accesing the application</Text>
            </View>
            <View style={styles.InputContainer}>
                <Text style={{height: 60, width:300, borderColor: 'grey', borderWidth: 1,textAlign: 'center',alignItems:'center'}}>{this.state.text}</Text>
            </View>
            <View style={styles.ButtonsContainer}>
                    <View style={styles.ButtonRow1}>
                        <TouchableHighlight key='1' id='1'   onPress={()=>this.handlepress(this.state,'1')} style={[styles.CircleShapeView,styles.Colum1]} > 
                                 <NumberButton key="1" id='1'/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress(this.state,'2')} style={[styles.CircleShapeView,styles.Colum2]} > 
                                    <NumberButton key="2" id="2"/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress(this.state,'3')} style={[styles.CircleShapeView,styles.Colum3]} > 
                                 <NumberButton key="3" id="3"/>
                        </TouchableHighlight>
                           
                    </View> 

                     <View style={styles.ButtonRow2}>
                     <TouchableHighlight key='4' id='4'   onPress={()=>this.handlepress(this.state,'4')} style={[styles.CircleShapeView,styles.Colum1]} > 
                                 <NumberButton key="4" id='4'/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress(this.state,'5')} style={[styles.CircleShapeView,styles.Colum2]} > 
                                    <NumberButton key="5" id="5"/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress(this.state,'6')} style={[styles.CircleShapeView,styles.Colum3]} > 
                                 <NumberButton key="6" id="6"/>
                        </TouchableHighlight>
                                
                            
                            </View> 
 
 
                        <View style={styles.ButtonRow2}>
                        <TouchableHighlight key='7' id='7'   onPress={()=>this.handlepress(this.state,'7')} style={[styles.CircleShapeView,styles.Colum1]} > 
                                 <NumberButton key="7" id='7'/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress(this.state,'8')} style={[styles.CircleShapeView,styles.Colum2]} > 
                                    <NumberButton key="8" id="8"/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress(this.state,'9')} style={[styles.CircleShapeView,styles.Colum3]} > 
                                 <NumberButton key="9" id="9"/>
                        </TouchableHighlight>
                            
                            </View>
                            <View style={styles.ButtonRow3}>
                        <TouchableHighlight key='7' id='7'   onPress={()=>this.Deletepress(this.state,'9')} style={styles.Colum1} > 
                        <Image style={{width:40,height:40}}
                          source={require('cle-passport/assets/icons/cancel.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress(this.state,'0')} style={[styles.CircleShapeView,styles.Colum2]} > 
                                    <NumberButton key="0" id="0"/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>navigate('Almost')} style={styles.Colum3} > 
                                <Text style={{fontSize:15}}>OK</Text>
                        </TouchableHighlight>
                            
                            </View>          
                            </View>
                    
                    </View>
             
                   
                      );
                }
            } 
            export default VerifyPinScreen;



            const styles = StyleSheet.create({
                container:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
                textContainer:{flex:1, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
                textStyle:{ fontSize: 30, justifyContent:'center',textAlign: 'center',color:'grey'},
                InputContainer:{flex:1,backgroundColor:'#FFFFFF',justifyContent:'flex-start',alignItems:'center',width:400,marginRight:20},
                ButtonsContainer:{flex:3,justifyContent: 'center',alignItems:'center',right:10,bottom:80},
                CircleShapeView: { width: 50, height: 50, borderRadius: 150/2, backgroundColor: '#00BCD4',justifyContent:'space-around',alignItems:'stretch',right:20},
                ButtonRow1:{flexDirection:'row',  justifyContent: 'space-around',alignItems:'stretch',paddingHorizontal:30,marginRight:30,marginTop:20 ,marginLeft:20, paddingLeft:20,paddingRight:20},
                ButtonRow2:{flexDirection:'row',  justifyContent: 'space-around',alignItems:'stretch',paddingHorizontal:30,marginRight:30,marginTop:20,marginLeft:20,paddingLeft:20,paddingRight:20},
                ButtonRow3:{flexDirection:'row',  justifyContent: 'space-around',alignItems:'stretch',paddingHorizontal:30,marginRight:30,marginTop:20,marginLeft:20,paddingLeft:20,paddingRight:20,right:10},
                Colum1:{right:20},
                Colum2:{left:20},
                Colum3:{left:60},
                number1:{justifyContent:'center',alignItems:'center'}
             
                
                
                
                
                
                
                
                
                
                
                
                });