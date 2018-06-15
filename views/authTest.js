import React, { Component } from 'react';
import { View, Text, StyleSheet  } from "react-native";
//import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';



class authTest extends Component{
    render(){
        return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
    }
}
            
export default withAuthenticator(authTest);
//export default authTest

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
});