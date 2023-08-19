//bookmarked card 
import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
//icon
import { locationIcon, phoneIcon } from '../icons';
import RemoveBtn from './RemoveBtn';
import { bookmarkedCard as styles } from '../css';

import removeBookmarkedResources from '../../../utils/api/bookmarkservices';

//this component will take the name, location, phoneNumber, and picture of the resource to make a resource card
const BookmarkedCard = ({ cardName, location, phoneNumber, source, resourceId }) => (
  //create the shape of the card
  <View style={styles.bookmarkedCardContainer}>
    {/* load the image of the resource on the card */}
    <Image source={source} />
    {/* create a box that stores all the resources' infos on the card*/}
    <View style={styles.bookmarkedCardInfoContainer}>
      {/* name of the resource */}
      <Text style={styles.title}>{cardName}</Text>
      {/*location of the resource */}
      <View style={styles.infoContainer}>
        {locationIcon}
        <Text style={styles.info}>{location}</Text>
      </View>
      {/* phone number of the resource */}
      <View style={styles.infoContainer}>
        {phoneIcon}
        <Text style={styles.info}>{phoneNumber}</Text>
      </View>
    </View>
    {/* the remove button
         */}
    <RemoveBtn onPress={
      () => {
        const { userToken } = useAuth();
        setIsLoading(true);// - start loading state 
        try {
          removeBookmarkedResources(resourceId, userToken);

        } catch (error) {

        }
        setIsLoading(false); //- end loading state
      }
    } />
  </View>
)
export default BookmarkedCard;