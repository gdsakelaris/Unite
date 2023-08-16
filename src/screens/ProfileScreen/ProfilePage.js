import React from 'react';
import ProfileContainer from "./subscreens/ProfileContainer"
import ProfileOption from "./subscreens/ProfileOption"
import ProfileOptionsPortion from "./subscreens/ProfileOptionsPortion"
import ProfileImage from "./subscreens/ProfileImage"
import { useAuth } from '../../context/AuthProvider';
const ProfilePage = ({ navigation }) => {
  const {logout} = useAuth()
  return (
  <ProfileContainer>
    <ProfileImage navigation={navigation}/>
    <ProfileOptionsPortion>
      <ProfileOption optionName={'Bookmarked Services'} iconName={'bookmark'} onPress={() => navigation.navigate('BookmarkedServices')}/>
      <ProfileOption optionName={'View Published Service'} iconName={'md-document-outline'} onPress={() => navigation.navigate('View Published Service')}/>
      <ProfileOption optionName={'Settings'} iconName={'settings-sharp'}
        onPress={() => navigation.navigate('SettingsNavigation')}/>
      <ProfileOption optionName={'Help'} iconName={'help-with-circle'}  onPress={() => navigation.navigate('Help')}/>
      <ProfileOption optionName={'Log Out'} iconName={'log-out-outline'} onPress={() => logout() }/>
    </ProfileOptionsPortion>
  
  </ProfileContainer>)
}
export default ProfilePage;