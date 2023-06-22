import React, { useState } from 'react';
import EditProfileContainer from './subscreens/EditProfileContainer';
import ProfilePicture from './subscreens/ProfilePicture';
import EditProfileInfoContainer from './subscreens/EditProfileInfoContainer';
import ProfileInfoField from './subscreens/ProfileInfoField';
const EditProfile = () => {
  const [emailAddress, setEmailAddress] = useState('john123@gmail.com')
  const [userName, setUserName] = useState('John')
  const [password, setPassword] = useState('12345')
  const [phoneNumber, setPhoneNumber] = useState('408777222')
  const [location, setLocation] = useState('San Jose, CA')
  return (  
    <EditProfileContainer>
      <ProfilePicture/>
      <EditProfileInfoContainer>
          <ProfileInfoField title={'Email Address'} content={emailAddress} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(text) => setEmailAddress(text)}/>
          <ProfileInfoField title={'Username'} content={userName} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(text) => setUserName(text)}/>
          <ProfileInfoField title={'Password'} content={password} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
          <ProfileInfoField title={'Phone Number'} content={phoneNumber} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(newphoneNumber) => setPhoneNumber(newphoneNumber)}/>
          <ProfileInfoField title={'Location'} content={location} autoCorrect={false} autoCapitalize='none' autoComplete='off' clearButtonMode={true} onChangeText={(newLocation) => setLocation(newLocation) }/>
      </EditProfileInfoContainer>
    </EditProfileContainer>
    
  );
}
export default EditProfile;