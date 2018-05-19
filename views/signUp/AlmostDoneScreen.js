import React, { Component } from 'react';
import { View, Text, StyleSheet  } from "react-native";

class AlmosDoneScreen extends Component{
    render(){
        return (
            <View>
                <Text>Almost Done</Text>
            </View>
        );
    }
} 

export default AlmosDoneScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});