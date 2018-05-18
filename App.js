import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeView from "./views/home.js"




class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'ya chingaste morro',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go backhome"
        onPress={() =>
          navigate('Home', { name: 'jane' })
        }
      />
    );
  }
}

const App = createStackNavigator({
  Home: {
    screen: HomeView
  },
  Profile:{ screen:ProfileScreen}
});

export default App;

