import React from 'react';
import { View, Pressable} from 'react-native';
import { locationText as styles } from '../css';
import {locationIcon} from '../icons'
import { getSpecificStyleForlocationText, handleLocationTextBlurred, handleLocationTextFocused } from '../functions';
import { Text } from 'react-native-paper';
const LocationText = ({location}) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <View style={styles.locationSignContainer}>
        {locationIcon}
        <View style={styles.locationTextContainer}>
          <Pressable
            onPressIn={() => handleLocationTextFocused(setIsFocus)}
            onPressOut={() => handleLocationTextBlurred(setIsFocus)}>
            <Text
              style={getSpecificStyleForlocationText(isFocus)}>
                {location}
            </Text>
          </Pressable>
        </View>
    </View>
  );
}
export default LocationText;