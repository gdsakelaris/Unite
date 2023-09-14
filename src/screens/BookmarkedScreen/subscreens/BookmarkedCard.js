/**
 * BookmarkedCard component.
 * This component displays a card for a bookmarked resource.
 *
 * @component
 * @param {string} cardName - The name of the bookmarked resource.
 * @param {string} location - The location of the bookmarked resource.
 * @param {string} phoneNumber - The phone number of the bookmarked resource.
 * @param {string} source - The image source for the bookmarked resource.
 * @param {string} resourceId - The ID of the bookmarked resource.
 * @returns {JSX.Element} BookmarkedCard component
 */


import React, { useState } from 'react';
import { View, Image} from 'react-native';
import { Text } from 'react-native-paper'; // Ultilize text component from react navive paper for the title because the component provides prop that switch the style to dark theme. Go to react native paper and check out Text component for more reference
//icon
import { locationIcon, phoneIcon } from '../icons';
import RemoveBtn from './RemoveBtn';
import { bookmarkedCard as styles} from '../css';
// Needed services
import { useAuth } from '../../../context/AuthProvider';
import removeBookmarkedResources from '../../../utils/api/removeBookmarkedResources';


const BookmarkedCard = ({cardName, location, phoneNumber, source, resourceId }) => {

    const [isRemoveBookmarkLoading, setIsRemoveBookmarkLoading] = useState(false);
    //get userToken to authenticate with backend
    const { userToken } = useAuth();


    /**
     * Handles the removal of a bookmarked resource.
     * Calls the removeBookmarkedResources function to remove the resource from bookmarks.
     *
     * @function
     * @param {string} resourceId - The ID of the bookmarked resource to be removed.
     * @param {string} userToken - The user's authentication token.
     * @returns {void}
     */
    const handleRemoveBookmark = async (resourceId, userToken) => {
        // console.log('removing bookmark');
        // setIsRemoveBookmarkLoading(true);
        // const response = await removeBookmarkedResources(resourceId, userToken);
         removeBookmarkedResources(resourceId, userToken);
        // console.log('Bookmark removed.');
        // setIsRemoveBookmarkLoading(false);
    }

    return (
    //create the shape of the card
    <View style={styles.bookmarkedCardContainer}>
        {/* Display the image of the bookmarked resource. Currently use dummy image */}
        <Image source={source} />

        {/* Container for resource information */}
        <View style={styles.bookmarkedCardInfoContainer}>
            
            {/* Display the name of the resource */}
            <Text style={styles.title}>{cardName}</Text>
            
            {/* Container for location information */}
            <View style={styles.infoContainer}>
            {locationIcon}
            <Text style={styles.info}>{location}</Text>
            </View>
            
            {/* Container for phone number information */}
            <View style={styles.infoContainer}>
            {phoneIcon}
            <Text style={styles.info}>{phoneNumber}</Text>
            </View>
        </View>

        {/* Render the RemoveBtn component for removing the bookmark*/}
        <RemoveBtn onPress={() => handleRemoveBookmark(resourceId, userToken)}/>
    </View>
    )
};

export default BookmarkedCard;