/**
 * SaveProfileBtn component.
 * This component displays a button to save a user's profile changes.
 *
 * @component
 * @param {Function} onPress - Function to be called when the button is pressed.
 * @returns {JSX.Element} SaveProfileBtn component
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { saveBtn as styles } from '../css';

const SaveProfileBtn = ({ onPress }) => {
  // Get the authentication functions from AuthProvider context to manage loading state
  // const { setIsLoading } = useAuth();

  // const onSaveProfile = () => {
  //   setIsLoading(true);
  //   // Use the passed data when calling updateUser
  //   updateUser(email, name, password, phonenumber, userToken)
  //     .then((response) => {
  //       // Handle the response from updateUser function if needed
  //       console.log('User profile updated successfully', response);
  //     })
  //     .catch((error) => {
  //       // Handle any errors from updateUser function
  //       console.error('Error updating user profile', error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });

  //   // Call the onPress function passed as a prop
  //   onPress();
  // };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.buttonText}>Save Profile</Text>
    </TouchableOpacity>
  );
}

export default SaveProfileBtn;