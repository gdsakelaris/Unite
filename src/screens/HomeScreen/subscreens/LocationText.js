/**
 * LocationText component.
 * This component displays the user's location text under the search bar on the HomeScreen.
 * It includes an icon representing the location and the actual location text.
 *
 * @component
 * @param {string} location - The name of the user's location.
 * @returns {JSX.Element} LocationText component
 */

import React, {useState} from 'react';
import { View, Pressable} from 'react-native';
import { locationText as styles } from '../css';
import {locationIcon} from '../icons'
import { getSpecificStyleForlocationText, handleLocationTextBlurred, handleLocationTextFocused } from './underlineLocationText';
import { Text } from 'react-native-paper';

const LocationText = ({location}) => {
  const [isFocus, setIsFocus] = useState(false) //this state variable is used for style conditional rendering. If this variable is set to true, the location text will be underlined, otherwise, there will be no line rendered under it
  return (
    <View style={styles.locationSignContainer}>
        {/* location icon */}
        {locationIcon}
        <View style={styles.locationTextContainer}>
          {/* location text */}
          <Pressable
            onPressIn={() => handleLocationTextFocused(setIsFocus)} //when hover on the location text, it will be underlined
            onPressOut={() => handleLocationTextBlurred(setIsFocus)} //when away from the location text, the line under it will be gone 
            >
            <Text
              style={getSpecificStyleForlocationText(isFocus)} //this function will render the style of location text based on the value of isFocus state variable 
              >
                {location}
            </Text>
          </Pressable>
        </View>
    </View>
  );
}
export default LocationText;