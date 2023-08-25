/**
 * A component that displays the service image and associated actions in a resource card.
 *
 * @function
 * @param {string|Object} picture - The image of the service. Can be a URI string or an image object.
 * @param {function} editBtnFunction - The function to be executed when the edit button is pressed.
 * @param {number} resourceId - The ID of the resource associated with the image.
 * @param {boolean} hasEditButton - Indicates if the resource card has an edit button.
 * @returns {JSX.Element} - A component that displays the service image and related actions in a resource card.
 */


import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {resourceCard as styles} from '../../css';
import EditButton from './ResourceCardEditBtn';
import {bookmarkedIcon, whiteBookmarkedIcon} from "../../icons";
import { useAuth } from '../../../context/AuthProvider';
import bookmarkResources from '../../../utils/api/bookmarkResources';

const ResourceCardImage = ({picture, editBtnFunction, resourceId, hasEditButton}) => {
  /**
   * check if bookmark has been clicked or not
   */
  const [isBookmarked, setIsBookmarked] = useState(false);

  /**
   * use the token to authenticate with the backend when bookmarking resource
   */
  const {userToken} = useAuth()

  /**
   * Handles the bookmarking of the resource.
   */
  const handleBookmark = async () => {
    bookmarkResources(resourceId, userToken, setIsBookmarked);
  };

  return (
    // container that stores the image, edit btn, and the white box
    <View style={styles.imageContainer}>
      {/* Image of the resource */}
      <Image
        source={
          typeof picture === "string" ? {uri: picture} : picture
        }
        style={styles.image}
        resizeMode="cover"
      />
      {/* Saved resource button (bookmark). No saved btn for resource that has edit button, which represent the resource that user published*/}
      {!hasEditButton && <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={() => {
          /* Bookmark function. 
              Features that have not been achieved:
              - When the resource is already bookmarked, it can't be bookmarked again.
              - Unsave the resource when the bookmarked button is clicked after it has been clicked for bookmarking
              - Resource need to show if it has been bookmarked even after the app is refreshed or restarted */
          if (!isBookmarked) {
            handleBookmark();
          }
          else {
            setIsBookmarked(false)
          }
        }}
      >
        {/*Bookmark button*/}
        <View style={isBookmarked ? styles.greenBox : styles.whiteBox}>
          {isBookmarked ? whiteBookmarkedIcon : bookmarkedIcon}
        </View>
      </TouchableOpacity>}
      
      {/* Edit btn */}
      {hasEditButton && <EditButton text={'edit'} onPress={editBtnFunction}/>}
    </View>
  );
};
export default ResourceCardImage;