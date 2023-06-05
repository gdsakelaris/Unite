import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { MaterialIcons } from '@expo/vector-icons';


const EditProfileContainer = ({styles, children}) => (
  <View style={styles.container}>
      {children}
  </View>
)
const EditProfilePicture = ({styles}) => (
  <View style={styles.editProfilePicture}>
        <ProfilePicture styles={styles} />
  </View>
)
const ProfilePicture = ({styles}) => (
  <View style={styles.profilePictureView}>
      <Image source={require('../images/Reslogo.png')} resizeMode={'cover'} style={styles.profilePicture}></Image>
      <EditProfilePictureButton styles={styles} />
  </View>

)
const EditProfilePictureButton = ({styles}) => (
  <TouchableOpacity onPress={()=> console.log('Pressed')} >
    <View style={styles.editProfilePictureButtonView}>
      <MaterialIcons name="edit" size={24} color="black"/>
    </View>
  </TouchableOpacity>
)
const EditProfileInfo = ({styles, children}) => (
  <View style={styles.editProfileInfo}>
      {children}
  </View>
)
const EditProfileInfoField = ({styles, title, content, ...textInputProp}) => (
  <View style={styles.editProfileInfoFieldContainer}>
    <Text style={styles.editProfileInfoTitle}>{title}</Text>
    <TextInput style={styles.contentTextStyle} value={content} {...textInputProp}/>
  </View>
)



const EditProfile = () => {
  const [emailAddress, setEmailAddress] = useState('phongdiep@gmail.com')
  const [userName, setUserName] = useState('Phong Diep')
  const [password, setPassword] = useState('12345')
  const [phoneNumber, setPhoneNumber] = useState('4082034049')
  const [location, setLocation] = useState('San Jose, CA')
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)

  return (
    <EditProfileContainer styles={styles}>
        <EditProfilePicture styles={styles}></EditProfilePicture>
        <EditProfileInfo styles={styles}>
            <EditProfileInfoField styles={styles} title={'Email Address'} content={emailAddress} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(text) => setEmailAddress(text) }/>
            <EditProfileInfoField styles={styles} title={'Username'} content={userName} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(text) => setUserName(text) }/>
            <EditProfileInfoField styles={styles} title={'Password'} content={password} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
            <EditProfileInfoField styles={styles} title={'Phone Number'} content={phoneNumber} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(newphoneNumber) => setPhoneNumber(newphoneNumber) }/>
            <EditProfileInfoField styles={styles} title={'Location'} content={location} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(newLocation) => setLocation(newLocation) }/>
        </EditProfileInfo>
    </EditProfileContainer>
  );
}

const makeStyle = (fontScale) => StyleSheet.create({
  container: {
    flex: 1
  },
  editProfilePicture: {
    flex: 3,
    //backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  profilePictureView: {
    width: '37%',
    height: '55%',
    borderRadius:'100%',
    backgroundColor:'white',
    top: '8%'
  },
  profilePicture: {
    width:'100%',
    height:'100%',
    borderRadius:'100%'
  },
  editProfileInfo: {
    flex: 7,
    //backgroundColor:'blue'
  },
  editProfilePictureButtonView: {
    position:'absolute',
    width: '20%',
    height:35,
    borderRadius: '30%',
    backgroundColor:'#167EE6',
    justifyContent:'center',
    alignItems:'center',
    bottom:5, 
    left: 120
  },
  editProfileInfoFieldContainer: {
    width:'100%',
    height: '13%',
    marginBottom: '8%',
    marginLeft: '8%',
   // backgroundColor:'blue',
    justifyContent:'space-around'
  },
  editProfileInfoTitle: {
    fontSize: 20 / fontScale,
    fontWeight:'700',
    color:'#d3d3d3'
  },
  contentTextStyle: {
    width:'100%',
    //backgroundColor:'red',
    height:'40%',
    fontSize: 20/ fontScale,
    fontWeight:'700',
    borderBottomWidth:0.199
  }
});

export default EditProfile;