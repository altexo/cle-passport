import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeView from "./home.js";
import WelcomeScreen from './views/WelcomeScreen.js';
import  TermsAndConditionsScreen from "./views/signUp/TermsAndConditionsScreen.js";



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
          navigate('Terms', { name: 'jane' })
        }
      />
    );
  }
}

const App = createStackNavigator({
  Terms: {
    screen: TermsAndConditionsScreen
  },
  Profile:{ screen:ProfileScreen}
});

export default App;

