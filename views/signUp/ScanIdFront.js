import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image,CameraRoll } from 'react-native';
import { Constants, Camera, Permissions } from 'expo';
//import { Auth } from 'aws-amplify-react-native';



export default class ScanIdFront extends React.Component {
 

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };
  state ={ controllerLaunched: false };

  updateControllerLauncher = () => {
      this.setState({ controllerLaunched: true });
  }

componentDidMount() {


}


// login = () => {
//   const { username, password } = this.state;
//   const authenticationData = {
//     Username: username,
//     Password: password,
//   };
//   const authenticationDetails = new AuthenticationDetails(authenticationData);
//   const poolData = {
//     UserPoolId: appConfig.UserPoolId,
//     ClientId: appConfig.ClientId
//   };
//   const userPool = new CognitoUserPool(poolData);
//   const userData = {
//     Username: username,
//     Pool: userPool
//   };
//   const cognitoUser = new CognitoUser(userData);
//   cognitoUser.authenticateUser(authenticationDetails, {
//     onSuccess: (result) => {
//       console.log('access token + ' + result.getAccessToken().getJwtToken());
//       Config.credentials = new CognitoIdentityCredentials({
//         IdentityPoolId: appConfig.IdentityPoolId,
//         Logins: {
//           [`cognito-idp.${appConfig.region}.amazonaws.com/${appConfig.UserPoolId}`]: result.getIdToken().getJwtToken()
//         }
//       });
//       alert('Success');
//       console.log(Config.credentials);
//     },
//     onFailure: (err) => {
//       alert(err);
//     },
//   });
// }


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
          navigate('IdFront',data2)       
        });

     }
    
    );

   

 
      
         
  }
};

  async componentWillMount() {
      Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE)
   
  }
  

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
     // this._cognitoSingIn();
      return (
          <Camera
                style={{flex: 4, flexDirection: 'row', alignItems: 'flex-end', maxHeight:'100%' }}
                ref={ (ref) => {this.camera = ref} }type={this.state.type}
            >
                <View style={{ flex: 1 ,alignItems: 'center'}}>
                
                
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
               
        
        
        
      
      
      );
    }
  }
  }
}



 
