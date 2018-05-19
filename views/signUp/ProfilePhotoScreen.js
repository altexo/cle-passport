import React, { Component } from 'react';
import { View, Text, StyleSheet  } from "react-native";

class ProfilePhoto extends Component{
    render(){
        return (
            <View>
                <Text>Your Profile Photo</Text>
            </View>
        );
    }
} 

export default ProfilePhoto

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});