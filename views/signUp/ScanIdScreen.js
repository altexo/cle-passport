import React, { Component } from 'react';
import { View, Text, StyleSheet  } from "react-native";

class ScanIdScreen extends Component{
    render(){
        return (
            <View>
                <Text>Welcome Screen</Text>
            </View>
        );
    }
} 

export default ScanIdScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});