/**
 * @file ProfilePage.js
 * @description This file contains a component that represents the user profile page.
 */

import React, { useState } from 'react';
import ProfileContainer from "./subscreens/ProfileContainer"
import ProfileOption from "./subscreens/ProfileOption"
import ProfileOptionsPortion from "./subscreens/ProfileOptionsPortion"
import ProfileImage from "./subscreens/ProfileImage"
import { useAuth } from '../../context/AuthProvider';
import DialogMessage from "../../components/Dialog";

/**
 * Component representing the user profile page.
 *
 * @component
 * @param {object} navigation - Navigation object to navigate between screens.
 * @returns {JSX.Element} - A JSX element representing the user profile page.
 */
const ProfilePage = ({ navigation }) => {
  const [isLogoutDialogVisible, setIsLogoutDialogVisible] = useState(false);

  // Function to show the logout confirmation dialog
  const showLogoutDialog = () => setIsLogoutDialogVisible(true);

  // Function to hide the logout confirmation dialog
  const hideLogoutDialog = () => setIsLogoutDialogVisible(false);

  //get the logout function
  const {logout} = useAuth()

  // Function to handle logout confirmation
  const handleLogoutConfirmation = () => {
    // Perform any necessary logout actions here
    logout()
    hideLogoutDialog(); // Close the dialog
    
  };

  return (
    <ProfileContainer>
      {/* User profile image */}
      <ProfileImage navigation={navigation}/>

      {/* Profile options */}
      <ProfileOptionsPortion>
        {/* Bookmarked Services */}
        <ProfileOption optionName={'Bookmarked Services'} iconName={'bookmark'} onPress={() => navigation.navigate('BookmarkedServices')} />

        {/* Bookmarked Services */}
        <ProfileOption optionName={'View Published Service'} iconName={'md-document-outline'} onPress={() => navigation.navigate('View Published Service')} />

        {/* Settings */}
        <ProfileOption optionName={'Settings'} iconName={'settings-sharp'}
          onPress={() => navigation.navigate('SettingsNavigation')} />

          {/* Help */}
        <ProfileOption optionName={'Help'} iconName={'help-with-circle'} onPress={() => navigation.navigate('Help')} />

        {/* Logout */}
        <ProfileOption optionName={'Log Out'} iconName={'log-out-outline'} onPress={showLogoutDialog}/>
      </ProfileOptionsPortion>

      {/* Logout confirmation dialog */}
      <DialogMessage
        visible={isLogoutDialogVisible}
        onDismiss={hideLogoutDialog}
        title="Log Out"
        content="Are you sure you want to log out?"
        buttons={[
          { title: 'No', onPress: hideLogoutDialog },
          { title: 'Yes', onPress: handleLogoutConfirmation },
        ]}
      />
    </ProfileContainer>
  );
}
export default ProfilePage;