import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,TextInput,TouchableWithoutFeedback,TouchableHighlight  } from "react-native";
 
 
 
class NumberButton extends Component{
 
 
render(){
    return(<View style={styles.number1}><Text>{this.props.id}</Text></View>)
}
 
}
 
 
 
 
 
class CreatePinScreen extends Component{
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.props ={ number:'0'};
      }
handlepress = (val)=>{

    this.setState({text:val})
}
 
    

      render(){
        return (
            <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}> Create a PIN for accesing the application</Text>
            </View>
            <View style={styles.InputContainer}>
                <TextInput style={{height: 80, width:400, borderColor: 'grey', borderWidth: 1}}>{this.state.text}</TextInput>
            </View>
            <View style={styles.ButtonsContainer}>
                    <View style={styles.ButtonRow1}>
                        <TouchableHighlight key='1' id='1'  
                       onPress={()=>this.handlepress('1')}
                        style={[styles.CircleShapeView,styles.Colum1]} > 
                                 <NumberButton key="1" id='1'/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={()=>this.handlepress('2')} style={[styles.CircleShapeView,styles.Colum2]} > 
                                    <NumberButton key="2" id="2"/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this.pin} style={[styles.CircleShapeView,styles.Colum3]} > 
                                 <NumberButton key="3" id="3"/>
                        </TouchableHighlight>
                           
                    </View> 

                     <View style={styles.ButtonRow2}>
                                <View style={[styles.CircleShapeView,styles.Colum1,styles.number1]}><Text >4</Text></View>
                                <View style={[styles.CircleShapeView,styles.Colum2,styles.number1]}><Text >5</Text></View>
                                <View style={[styles.CircleShapeView,styles.Colum3,styles.number1]}><Text >6</Text></View>
                            
                            
                            </View> 
 
 
                        <View style={styles.ButtonRow2}>
                                <View style={[styles.CircleShapeView,styles.Colum1,styles.number1]}><Text >7</Text></View>
                                <View style={[styles.CircleShapeView,styles.Colum2,styles.number1]}><Text >8</Text></View>
                                <View style={[styles.CircleShapeView,styles.Colum3,styles.number1]}><Text >9</Text></View>
                                    
                            
                            </View>     
                            </View>
                    
                    </View>
             
                   
                      );
                }
            } 
            export default CreatePinScreen;



            const styles = StyleSheet.create({
                container:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
                textContainer:{flex:1, backgroundColor: '#FFFFFF',justifyContent:'flex-start',alignItems:'center'},
                textStyle:{ fontSize: 30, justifyContent:'center',textAlign: 'center',color:'grey'},
                InputContainer:{flex:1,backgroundColor:'#FFFFFF',justifyContent:'flex-start',alignItems:'center',width:400,marginRight:20},
                ButtonsContainer:{flex:3,justifyContent: 'center',alignItems:'center',right:10,bottom:80},
                CircleShapeView: { width: 75, height: 75, borderRadius: 150/2, backgroundColor: '#00BCD4',justifyContent:'space-around',alignItems:'stretch',right:20},
                ButtonRow1:{flexDirection:'row',  justifyContent: 'space-around',alignItems:'stretch',paddingHorizontal:30,marginRight:30,marginTop:20 ,marginLeft:20, paddingLeft:20,paddingRight:20},
                ButtonRow2:{flexDirection:'row',  justifyContent: 'space-around',alignItems:'stretch',paddingHorizontal:30,marginRight:30,marginTop:20,marginLeft:20,paddingLeft:20,paddingRight:20},
                ButtonRow3:{flexDirection:'row',  justifyContent: 'space-around',alignItems:'stretch',paddingHorizontal:30,marginRight:30,marginTop:20,marginLeft:20,paddingLeft:20,paddingRight:20},
                Colum1:{right:20},
                Colum2:{left:20},
                Colum3:{left:60},
                number1:{justifyContent:'center',alignItems:'center'}
             
                
                
                
                
                
                
                
                
                
                
                
                });