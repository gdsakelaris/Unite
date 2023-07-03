// make a portion to display service image in resource card
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { resourceCard as styles } from '../../css';
import { bookmarkedIcon } from '../../icons';
import EditButton from './ResourceCardEditBtn';
const ResourceCardImage = ({picture, hasEditButton}) => (
  // container that stores the image, edit btn, and the white box
  <View style={styles.imageContainer}>
              {/* image of the resource */}
              <Image
                source={
                  typeof picture === "string" ? { uri: picture } : picture
                }
                style={styles.image}
                resizeMode="cover"
              />
              {/* saved resource btn */}
              <TouchableOpacity
                style={styles.bookmarkButton}
                onPress={() => {
                  /* Bookmark function */
                }}
              >
                <View style={styles.whitebox}>
                  {bookmarkedIcon}
                </View>
              </TouchableOpacity>
            {/* edit btn */}
            {hasEditButton && <EditButton text={'edit'}/>}
  </View>
)
export default ResourceCardImage;