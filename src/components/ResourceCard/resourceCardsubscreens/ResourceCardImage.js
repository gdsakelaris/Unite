// make a portion to display service image in resource card
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {resourceCard as styles} from '../../css';
import EditButton from './ResourceCardEditBtn';
import {bookmarkedIcon, whiteBookmarkedIcon} from "../../icons";

const ResourceCardImage = ({picture, editBtnFunction}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
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
      {/* saved resource btn */}
      <TouchableOpacity
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
      </TouchableOpacity>
      {/* edit btn */}
      {editBtnFunction && <EditButton text={'edit'} onPress={editBtnFunction}/>}
    </View>
  );
};
export default ResourceCardImage;