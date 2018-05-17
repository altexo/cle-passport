import React, { Component } from 'react';
import { View, Text, StyleSheet  } from "react-native";

class TermsAndConditionsScreen extends Component{
    render(){
        return (
            <View>
                <Text>Terms And Conditions</Text>
            </View>
        );
    }
} 

export default TermsAndConditionsScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});