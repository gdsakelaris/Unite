/**
 * Profile Info Field component.
 * This component displays a title and a text input field on the Edit Profile screen.
 *
 * @component
 * @param {string} title - The title of the information field.
 * @param {string} content - The content of the information field.
 * @param {TextInputProps} textInputProp - Additional props to be passed to the TextInput component.
 * @returns {JSX.Element} ProfileInfoField component
 */

import React from 'react';
import { View, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { editProfileInfo as styles } from '../css';
const ProfileInfoField = ({title, content, ...textInputProp}) => (
  <View style={styles.editProfileInfoField}>
    <Text style={styles.editProfileInfoTitle}>{title}</Text>
    <TextInput style={styles.contentTextStyle} value={content} {...textInputProp}/>
  </View>
)
export default ProfileInfoField;