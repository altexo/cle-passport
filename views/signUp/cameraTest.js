import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image } from 'react-native';
import { Constants, FileSystem, Camera, Permissions } from 'expo';
import showSelfieScreen from './showSelfieScreen.js';
import { createStackNavigator } from 'react-navigation';

export default class cameraTest extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };
//   async press() {
//     console.log('Button Pressed');
//     if (this.camera) {
//         console.log('Taking photo');
//         let photo = await this.camera.takePictureAsync();
//         console.log(photo);
//     }
// }
componentDidMount() {
  FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
    console.log(e, 'Directory exists');
  });
}

press = async function() {
  if (this.camera) {
    this.camera.takePictureAsync().then(data => {
      console.log(data.uri);
      this.setState({
        source:{
          uri: data.uri
        }
      });
    let url =  FileSystem.moveAsync({
        from: data.uri,
        to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
      }).then(() => {
        console.log('Then...');
        console.log(url);
    
        Vibration.vibrate();
        navigate('showSelfie', { image: data.uri })
      });
    });
  }
};
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
      <View style={{ flex: 1 }}>
       <Camera
                style={{ flex: 1 }}
                ref={ (ref) => {this.camera = ref} }
            >
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity
                    style={{ flex: 0, backgroundColor: 'red' }}
                    onPress={this.press.bind(this)}
                >
                    <Text>Touch Me</Text>
                </TouchableOpacity>
                
        </Camera>
        {/* <Image style={{width: 200, height: 200}} source={this.state.source}/> */}
       </View>
      
      );
    }
  }
}
const nav = createStackNavigator({
  showSelfie: {
    screen: showSelfieScreen
  },
 
});
