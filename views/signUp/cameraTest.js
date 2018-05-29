import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image,CameraRoll } from 'react-native';
import { Constants, FileSystem, Camera, Permissions,ImageManipulator } from 'expo';
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
  // FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
  //   console.log(e, 'Directory exists');
  // });

}







takePicture = async function() {
  if (this.camera) {
     return this.camera.takePictureAsync().then(data => {
           console.log("first then",data)

            CameraRoll.saveToCameraRoll(data.uri, 'photo').then( data2=>{
           
            console.log("second then",data2);
            this.setState({ photoId: this.state.photoId + 1,Imagesource:{
              uri: data2
            }         
          });
             
          Vibration.vibrate();   
          const { navigate } = this.props.navigation;
          navigate('Selfie',this.state.Imagesource.uri)       
        });

     }
    
    );

    console.log("miando aqui",await photo);

 
      
         
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
                    onPress={this.takePicture.bind(this)}
                >
                    <Text>Touch me</Text>
                </TouchableOpacity>
                
        </Camera>
       
        <Image style={{flex: 1,flexDirection:'row', alignItems:'center', justifyContent: 'center'}} source={this.state.Imagesource}/>       
       
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
