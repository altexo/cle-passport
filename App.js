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
import verifyidFront from './views/verifyIdFront.js';
import scanidFrontInstructions from './views/signUp/scanIdFrontInstructions.js';
import scanidBackInstructions from './views/signUp/scanIdBackInstructions.js';
import ScanIdFront from './views/signUp/ScanIdFront.js';
import ScanIdBack from './views/signUp/scanIdBack.js';
import verifyidBack from './views/signUp/verifyidBack.js';

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
    screen: scanidBackInstructions
  },
  Profile:{ screen:ProfileScreen},
  Selfie:{screen:showSelfieScreen},
  IdFront:{screen:verifyidFront},
  IdBack:{screen:verifyidBack},
  scanFrontId:{screen:ScanIdFront},
  scanBackId:{screen:ScanIdBack}

});

export default App;

