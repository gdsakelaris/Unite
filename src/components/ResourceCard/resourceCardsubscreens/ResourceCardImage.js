// make a portion to display service image in resource card
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {resourceCard as styles} from '../../css';
import EditButton from './ResourceCardEditBtn';
import {bookmarkedIcon, whiteBookmarkedIcon} from "../../icons";
import { useAuth } from '../../../context/AuthProvider';
import bookmarkResources from '../../../utils/api/bookmarkResources';

const ResourceCardImage = ({picture, editBtnFunction, resourceId}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {setIsLoading, userToken} = useAuth()
  const handleBookmark = async () => {
    /**
     * Include everthing below in try/catch block 
     * 
     * setIsBookmarked(!isBookmarked) - change the color of the bookmarked icon when pressed
     * setIsLoading(true) - start the loading state
     * bookmarkResources(resourceId, userToken) - send request to backend to bookmark resource
     * setIsLoading(false)
     * if 200 - alert('The resource is bookmarked successfully')
     * 500 - alert('Bookmark resource fail')
     */
    try {
      const response = bookmarkResources(resourceId, userToken);
      console.log(response)
    } catch (error) {
      throw new Error('Error: ' + error)
    }
    setIsBookmarked(!isBookmarked);

  };

  return (
    // container that stores the image, edit btn, and the white box
    <View style={styles.imageContainer}>
      {/* image of the resource */}
      <Image
        source={
          typeof picture === "string" ? {uri: picture} : picture
        }
        style={styles.image}
        resizeMode="cover"
      />
      {/* saved resource btn. No saved btn for resource that user publishes*/}
      {!editBtnFunction && <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={() => {
          /* Bookmark function */
          handleBookmark();
        }}
      >
        {/*bookmark icon*/}
        <View style={isBookmarked ? styles.greenBox : styles.whiteBox}>
          {isBookmarked ? whiteBookmarkedIcon : bookmarkedIcon}
        </View>
      </TouchableOpacity>}
      {/* edit btn */}
      {editBtnFunction && <EditButton text={'edit'} onPress={editBtnFunction}/>}
    </View>
  );
};
export default ResourceCardImage;