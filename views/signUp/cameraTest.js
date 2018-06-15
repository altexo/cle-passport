import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image,CameraRoll } from 'react-native';
import { Constants, FileSystem, Camera, Permissions,ImageManipulator } from 'expo';
import showSelfieScreen from './showSelfieScreen.js';
import { createStackNavigator } from 'react-navigation';


export default class cameraTest extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front
  };
  state ={ controllerLaunched: false };

  updateControllerLauncher = () => {
      this.setState({ controllerLaunched: true });
  }
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
       
          navigate('Selfie',data2)      
          //this.camera.componentWillUnmount()
        });
        
     }
    
    );

    console.log("miando aqui",await photo);

 
      
         
  }
};

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    let permission = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);

    if (permission.status === 'granted') {
      console.log('Granted')
    }
  }
  

  render() {
   
    const { hasCameraPermission } = this.state;
    if(this.state.controllerLaunched){
      return null;
  }else {
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      if(this.state.controllerLaunched){
        return null;
    }else {
      return (
      <View style={{ flex: 1 }}>
        <View style={{flex: 0.5}}>
          <Text style={{fontSize: 30, textAlign:'center'}}>Take a selfie</Text>
          <Text style={{fontSize: 15, textAlign:'left', marginLeft: 29}}>Follow the instructions..</Text>
        </View>
        <View style={{flex: 3.5, alignItems:'center'}}>
          <Camera
                style={{flex: 0.8,marginLeft: 15, marginRight: 15, flexDirection: 'row', alignItems: 'flex-end' }}
                ref={ (ref) => {this.camera = ref} }type={Camera.Constants.Type.front}
            >
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity
                    style={{ marginBottom: 3}}
                    // onPress={this.takePicture.bind(this)}
                    onPress={() => {
                      this.setState({
                        type: Camera.Constants.Type.front
                         
                      });
                    }
                  }
                >
                    <Image source={require('cle-passport/assets/icons/camera_front_black_24.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginBottom: 3}}
                    // onPress={this.takePicture.bind(this)}
                    onPress={() => {
                      this.setState({
                        type: Camera.Constants.Type.back
                         
                      });
                    }
                  }
                >
                    <Image source={require('cle-passport/assets/icons/camera_rear_black_24.png')}/>
                </TouchableOpacity>
                
          </Camera>
        </View>
        
        <View style={{flex: 0.5, alignItems: 'center'}}>
                  
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
          <View style={{ width: 60,
        height: 60,
        borderRadius: 150/2,
        backgroundColor: '#00BCD4',
        justifyContent:'center',alignItems:'center', marginBottom:20}}>
          <Image style={{width:40,height:40}}
                  source={require('cle-passport/assets/icons/camera.png')}/>
                  </View>
          </TouchableOpacity>
        </View>
       
       </View>
      
      );
    }
  }
  }
}

}

const nav = createStackNavigator({
  showSelfie: {
    screen: showSelfieScreen
  },
 
});

