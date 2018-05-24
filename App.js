import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeView from "./views/home.js";
import WelcomeScreen from './views/WelcomeScreen.js';
import  TermsAndConditionsScreen from "./views/signUp/TermsAndConditionsScreen.js";
import VerifyInfoScreen from "./views/signUp/VerifyInfoScreen.js";
import AuthorizeScreen from './views/signUp/AuthorizeScreen.js';
import ScanIdScreen from './views/signUp/ScanIdScreen.js';
import CreatePinScreen from './views/signUp/CreatePinScreen.js';
import TakeASelfieScreen from './views/TakeASelfieScreen.js';
import TakeASelfieScreen2 from './views/TakeASelfieScreen2.js';




const App = createStackNavigator({
  Authorize: {
    screen: CreatePinScreen}
  });

export default App;

