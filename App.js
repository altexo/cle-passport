import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeView from "./views/home.js";
import WelcomeScreen from './views/WelcomeScreen.js';
import  TermsAndConditionsScreen from "./views/signUp/TermsAndConditionsScreen.js";
import VerifyInfoScreen from "./views/signUp/VerifyInfoScreen.js";
//import RelayingPartyScreen from './views/signUp/RelayingPartyScreen.js';
import AuthorizeScreen from './views/signUp/AuthorizeScreen.js';
import ScanIdScreen from './views/signUp/ScanIdScreen.js';
import CreatePinScreen from './views/signUp/CreatePinScreen.js';
import cameraTest from './views/signUp/cameraTest.js';
import showSelfieScreen from './views/signUp/showSelfieScreen.js';
import AlmostDoneScreen from './views/signUp/AlmostDoneScreen.js';

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
  Authorize: {
    screen: cameraTest
  },
  Profile:{ screen:ProfileScreen},
  Selfie:{screen:showSelfieScreen}

});

export default App;

