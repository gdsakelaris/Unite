// make a portion to display service image in resource card
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {resourceCard as styles} from '../../css';
import EditButton from './ResourceCardEditBtn';
import renderExpoIcon from "../../../utils/renderExpoIcon";
import {fontScale} from "../../../base";

const ResourceCardImage = ({picture, hasEditButton}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const bookmarkIconStyle = {
    size: 17 / fontScale,
    color: isBookmarked ? 'white' : 'black'
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
        <View style={isBookmarked ? styles.orangeBox : styles.whiteBox}>
          {/*{bookmarkedIcon}*/}
          {renderExpoIcon('Feather', 'bookmark', bookmarkIconStyle)}
        </View>
      </TouchableOpacity>
      {/* edit btn */}
      {hasEditButton && <EditButton text={'edit'}/>}
    </View>
  );
};
export default ResourceCardImage;