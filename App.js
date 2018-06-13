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
  Authorize: { screen: HomeView},
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
  infoVerify:{screen:VerifyInfoScreen}


});

export default App;

var IDENTITY_POOL_ID = "us-west-2:2b780d89-b164-404c-9d21-4148a6d3ee18";
var CLIENT_ID = "7mkla4lrl0lu04jp6d9fqupa7e";
var COGNITO_REGION = "us-west-2";
var USER_POOL_ID = "us-west-2_w1b1FWdV8";



var AmazonCognitoIdentity = require('amazon-cognito-identity-js');


var authenticationData = {
  Username : 'justino',
  Password : '+`4EbERa&"fN2rP"'
};
var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
var poolData = {
  UserPoolId : USER_POOL_ID,
  ClientId : CLIENT_ID
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
  Username : 'justino',
  Pool : IDENTITY_POOL_ID
};
var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess: function (result) {
      console.log('access token + ' + result.getAccessToken().getJwtToken());

      //POTENTIAL: Region needs to be set if not already set previously elsewhere.
      AWS.config.region = '<region>';

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId : '...', // your identity pool id here
          Logins : {
              // Change the key below according to the specific region your user pool is in.
              'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>' : result.getIdToken().getJwtToken()
          }
      });

      //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
      AWS.config.credentials.refresh((error) => {
          if (error) {
               console.error(error);
          } else {
               // Instantiate aws sdk service objects now that the credentials have been updated.
               // example: var s3 = new AWS.S3();
               console.log('Successfully logged!');
          }
      });
  },

  onFailure: function(err) {
      alert(err.message || JSON.stringify(err));
  },

});