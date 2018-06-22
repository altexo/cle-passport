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
import TakeASelfieScreen from './views/TakeASelfieScreen.js';
import VerifyPinScreen from './views/signUp/VerifyPinScreen.js';
import QRscanner from './views/QrScanner.js';
import LastScreen from './views/signUp/lastScreen.js';
// import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
// import { withAuthenticator } from 'aws-amplify-react-native';
// import Amplify from 'aws-amplify-react-native';

// Amplify.configure({
//     Auth: {
//     // REQUIRED - Amazon Cognito Identity Pool ID
//         identityPoolId: 'us-west-2:2b780d89-b164-404c-9d21-4148a6d3ee18',
//     // REQUIRED - Amazon Cognito Region
//         region: 'us-west-2',
//     // OPTIONAL - Amazon Cognito User Pool ID
//         userPoolId: 'us-west-2_w1b1FWdV8',
//     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: '7mkla4lrl0lu04jp6d9fqupa7e',
//     // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
//         mandatorySignIn: false,
//     // OPTIONAL - Configuration for cookie storage
//         // cookieStorage: {
//         // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
//         //     domain: '.yourdomain.com',
//         // // OPTIONAL - Cookie path
//         //     path: '/',
//         // // OPTIONAL - Cookie expiration in days
//         //     expires: 365,
//         // // OPTIONAL - Cookie secure flag
//         //     secure: true
//         // }
//     }
// });
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
  Authorize: {screen:HomeView},
  Profile:{ screen:ProfileScreen},
  Selfie:{screen:showSelfieScreen},
  IdFront:{screen:verifyidFront},
  IdBack:{screen:verifyidBack},
  scanFrontId:{screen:ScanIdFront},
  scanBackId:{screen:ScanIdBack},
  scanidInstructionsBack:{screen:scanidBackInstructions},
  scanidInstructionsFront:{screen:scanidFrontInstructions},
  Terms:{screen:TermsAndConditionsScreen},
  TakeSelfieWelcome:{screen:cameraTest},
  pin:{screen:CreatePinScreen},
  Almost:{screen:AlmostDoneScreen},
  scanID:{screen:ScanIdScreen},
  TakeSelfie:{screen:TakeASelfieScreen},
  verifyPin:{screen:VerifyPinScreen},
  infoVerify:{screen:VerifyInfoScreen},
  ScannerQr:{screen:QRscanner},
  screenLast:{screen:LastScreen}


});

export default App;

