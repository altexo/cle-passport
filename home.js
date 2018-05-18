import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


const HomeView = class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
        <View styler={styles.containerLogo}><Text > hello world!</Text></View>
        <View style={styles.containerButton}>
        <Button 
          title="Sing Up!"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
        
        </View>
        
        </View>
      );
    }
  }
const styles = StyleSheet.create({
container:{ flex:1, backgroundColor: '#FFFFFF',justifyContent:'center',alignItems:'center'},
containerLogo:{flex:1,justifyContent:'center',alignItems:'center'},
containerButton:{flex: 1,width:300 ,justifyContent:'center',alignItems:'center'}




});

  export default HomeView;