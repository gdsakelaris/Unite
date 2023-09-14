/**
 * EditProfile component.
 * This component provides a screen for users to edit their profile information.
 *
 * @component
 * @returns {JSX.Element} EditProfile component
 */

import React, { useState } from 'react';
import EditProfileContainer from './subscreens/EditProfileContainer';
import ProfilePicture from './subscreens/ProfilePicture';
import EditProfileInfoContainer from './subscreens/EditProfileInfoContainer';
import ProfileInfoField from './subscreens/ProfileInfoField';
import { useAuth } from '../../context/AuthProvider';
import SaveProfileBtn from './subscreens/SaveProfileBtn';
import { updateUser } from '../../utils/api/userFunctions';
const EditProfile = () => {
  //mockup data
  /**
 * replace all the states below with the useInfo state from useAuth context 
 * useAuth is expected to be the object of the following keys 
 * 
 * assume userInfo is the object of the following keys
 *userInfo = {
    name,
    email,
    phonenumber
    location,
    password
 }
 */

  //get userToken to authenticate with backend before updating profile's informations
  //get userInfo to populate all the editable fields with the profile's current informations
  const {userInfo, userToken, setUserInfo} = useAuth()
  console.log(userInfo)

  // States for editable fields
  const [name, setName] = useState(userInfo.name)
  //const [password, setPassword] = useState(userInfo.password)
  const [phonenumber, setPhoneNumber] = useState(userInfo.phonenumber)
  //const [location, setLocation] = useState('San Jose, CA')


  return (  
    <EditProfileContainer>
      <ProfilePicture/>
      <EditProfileInfoContainer>

          {/* Editable fields */}

          {/* <ProfileInfoField title={'Email Address'} content={email} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={'always'} onChangeText={(text) => setEmail(text)}/> */}


          <ProfileInfoField title={'Username'} content={name} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={'always'} onChangeText={(text) => setName(text)}/>


          {/* <ProfileInfoField title={'Password'} content={password} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={'always'} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/> */}


          <ProfileInfoField title={'Phone Number'} content={phonenumber} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={'always'} onChangeText={(newphoneNumber) => setPhoneNumber(newphoneNumber)}/>
          
           {/* Save button */}
           <SaveProfileBtn
            onPress={() => {
                //send request to backend to update user when pressed 
                updateUser(name, phonenumber, userToken, userInfo)
            }}
          />

          {/*
          this was disabled in favor of an upload button
          <ProfileInfoField title={'Location'} content={location} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={'always'} onChangeText={(newLocation) => setLocation(newLocation) }/>*/}
          
      </EditProfileInfoContainer>
    </EditProfileContainer>
    
  );
}
export default EditProfile;