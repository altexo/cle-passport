import React, { Component } from 'react';
import { View, Text, StyleSheet  } from "react-native";

class WelcomeScreen extends Component{
    render(){
        return (
            <View>
                <Text>Welcome Screen</Text>
            </View>
        );
    }
} 

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});