import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'ya chingaste morro',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile:{ screen:ProfileScreen}
});

export default App;

