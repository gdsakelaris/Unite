/**
 * NewResourceButton component.
 * This component creates an 'Add Resource' button that, when pressed, navigates to the 'View Published Service' screen.
 *
 * @component
 * @param {object} navigation - The navigation prop from React Navigation to enable navigation.
 * @returns {JSX.Element} NewResourceButton component
 */

import * as React from 'react';
import { newresourcebutton as styles } from '../css';
import { Text, Pressable } from 'react-native';


const NewResourceButton = ({navigation}) => {

  return (
    <Pressable style={styles.newResourceDefaultStyle} onPress={() => navigation.navigate('View Published Service')}>
      <Text style={styles.textStyle}> Add Resource        +</Text>
    </Pressable>
  );
};
export default NewResourceButton;