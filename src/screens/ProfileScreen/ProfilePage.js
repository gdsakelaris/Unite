import React, { useState } from 'react';
import ProfileContainer from "./subscreens/ProfileContainer"
import ProfileOption from "./subscreens/ProfileOption"
import ProfileOptionsPortion from "./subscreens/ProfileOptionsPortion"
import ProfileImage from "./subscreens/ProfileImage"
import DialogMessage from "../../components/Dialog";

const ProfilePage = ({ navigation }) => {
  const [isLogoutDialogVisible, setIsLogoutDialogVisible] = useState(false);
  const showLogoutDialog = () => setIsLogoutDialogVisible(true);
  const hideLogoutDialog = () => setIsLogoutDialogVisible(false);

  const handleLogoutConfirmation = () => {
    // Perform any necessary logout actions here
    hideLogoutDialog(); // Close the dialog
    navigation.navigate('BookmarkedServices');
  };

  return (
    <ProfileContainer>
      <ProfileImage navigation={navigation}/>
      <ProfileOptionsPortion>
        <ProfileOption optionName={'Bookmarked Services'} iconName={'bookmark'} navigateTo={'BookmarkedServices'} navigation={navigation}/>
        <ProfileOption optionName={'View Published Service'} iconName={'md-document-outline'} navigateTo={'View Published Service'} navigation={navigation}/>
        <ProfileOption optionName={'Settings'} iconName={'settings-sharp'} navigateTo={'SettingsNavigation'} navigation={navigation}/>
        <ProfileOption optionName={'Help'} iconName={'help-with-circle'} navigateTo={'Help'} navigation={navigation}/>
        <ProfileOption optionName={'Log Out'} iconName={'log-out-outline'} onPress={showLogoutDialog}/>
      </ProfileOptionsPortion>
      <DialogMessage
        visible={isLogoutDialogVisible}
        onDismiss={hideLogoutDialog}
        title="Log Out"
        content="Are you sure you want to log out?"
        buttons={[
          { title: 'Cancel', onPress: hideLogoutDialog },
          { title: 'Yes', onPress: handleLogoutConfirmation },
        ]}
      />
    </ProfileContainer>
  );
}
export default ProfilePage;