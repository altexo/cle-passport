import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, CameraRoll, TouchableOpacity } from "react-native";
import { Constants, FileSystem, Camera, Permissions, ImageManipulator } from 'expo';
import { Dimensions } from 'react-native';
import Modal from "react-native-modal";



class verifyidBack extends React.Component {


  state = {
    isModalVisible: false,
  }


  componentWillMount() {

     const params = this.props.navigation.state
     console.log('Params: verifyBackID')
     console.log(params.params)
     let imageURL = params.params.image2

    // // //Test
    // // let imageURL = 'content://media/external/images/media/21708'
    // // //EndTest
   this.setState({imageUri:{
         uri: imageURL
       },
       images: params.params
     });
     console.log(this.state);


  }



  isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  handlepress = (previousState, val) => {

    this.setState(
      { text: previousState.text + val });
  }


  navigationPress = () => {
    const { navigate } = this.props.navigation;
    delay = (function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();

    this._toggleModal()

    delay(() => {
      this._toggleModal();
    }, 5000);
    console.log('pressed');
    console.log(this.state);
    navigate('infoVerify', this.state.images);









  }


  render() {


    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5, alignItems: 'center' }}>
          <Text style={{ flex: 0.2, fontSize: 30, textAlign: 'center', }}>Check Your ID Back</Text>
          <Text style={{ flex: 0.2, fontSize: 20, textAlign: 'center', }}>verify your ID photo is taken correctly      before we validate it</Text>


          <Modal isVisible={this.state.isModalVisible} style={{ height: 100 }}>
            <View style={styles.modalContent}>
              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
              
                <Image source={require('cle-passport/assets/icons/identificacion.png')} />
                <Text style={{ marginLeft: '5%', fontSize: 23, marginTop: 0 }}>Loading</Text>
              </View>
            </View>
          </Modal>

      



        </View>
        <View style={styles.imageContainer}>
          <Image style={{ width: 300, height: 150 }} source={this.state.imageUri} />
        </View>


        <View style={{ flexDirection: 'row' }}>








          <View style={{ flex: 1, right: 2 }} ><Button style={{ width: 400, height: 150 }} title='Retry' onPress={() => navigate('scanBackId')}></Button></View>
          <View style={{ flex: 1, left: 2 }}><Button style={{ height: 60, height: 150 }} title='Continue' onPress={() => this.navigationPress()}></Button></View>




        </View>



      </View>
    );

  }
}

export default verifyidBack

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'flex-start',
    alignItems: 'center'
  },
  imageContainer:
  {
    flex: 0.7,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    bottom: 100




  },
  buttonContainer:
  {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%'

  },
  // buttonStyle:{
  //  position: 'absolute',
  //  bottom: 0,
  //  alignItems: 'stretch'
  //  // alignItems: 'flex-center'
  // },
  bottomView: {

    width: '100%',
    height: 50,
    backgroundColor: '#0592fe',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },











});