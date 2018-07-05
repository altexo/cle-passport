import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image,CameraRoll } from 'react-native';
import { Constants, Camera, Permissions } from 'expo';



export default class ScanIdFront extends React.Component {
 

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    shouldShowCamera: false
  };
  state ={ controllerLaunched: false,
    shouldShowCamera: false };

  updateControllerLauncher = () => {
      this.setState({ controllerLaunched: true });
  }
  
  async componentDidMount() {
    
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted', shouldShowCamera:true });
    let permission = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);

    if (permission.status === 'granted') {
      console.log('Granted')
    }
  }




takePicture = async function() {
  if (this.camera) {
     return this.camera.takePictureAsync().then(data => {
           console.log("first then",data)

            CameraRoll.saveToCameraRoll(data.uri, 'photo').then( data2=>{
           
            console.log("second then",data2);
            this.setState({ photoId: this.state.photoId + 1,Imagesource:{
              uri: data2
            },
            shouldShowCamera:false       
          }, () => {
            Vibration.vibrate();   
            Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
          const { navigate } = this.props.navigation;
          navigate('IdFront',data2)       
          });
             
          
        });

     }
    
    );   
  }
};

  

  render() {
    if(this.state.controllerLaunched){
      return null;
  }else {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
        {this.state.shouldShowCamera?
          <Camera
                focusDepth ={1}
                style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', maxHeight:'100%' }}
           
                ref={ (ref) => {this.camera = ref} }type={this.state.type}
            >
                 <View style={{ flex: 4 ,alignItems: 'center'}}>
                
                
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
              
               
                
                
          </Camera>
          :null}
               
        
        </View>
        
      
      
      );
    }
  }
  }
}



 
