import React, { Component } from 'react';
import { View, Text, StyleSheet  } from "react-native";

class TakeASelfieScreen extends Component{
    render(){
        return (
            <View>
                <Text>Take a Selfie</Text>
            </View>
        );
    }
} 

export default TakeASelfieScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});