import React from 'react';
import { View, Image} from 'react-native';
import { Text } from 'react-native-paper';
import { phoneIcon, locationIcon } from '../icons';
import RemoveBtn from './RemoveBtn';
import { bookmarkedCard as styles } from '../css';
const BookmarkedCard = ({cardName, location, phoneNumber, source }) => (
  <View style={styles.bookmarkedCardContainer}>
      <Image source={source} />
      <View style={styles.bookmarkedCardInfoContainer}>
        <Text style={styles.title}>{cardName}</Text>
        <View style={styles.infoContainer}>
          {locationIcon}
          <Text style={styles.info}>{location}</Text>
        </View>
        <View style={styles.infoContainer}>
          {phoneIcon}
          <Text style={styles.info}>{phoneNumber}</Text>
        </View>
      </View>
      <RemoveBtn/>
  </View>
)
export default BookmarkedCard;