// make a portion to display service image in resource card
import React from 'react';
import { View, Image } from 'react-native';
import { resourceCard as styles } from '../css';
import { bookmarkedIcon } from '../icons';
import EditButton from './ResourceCardEditBtn';
const ResourceCardImage = ({picture, hasEditButton}) => (
  <View style={styles.imageContainer}>
              <Image
                source={
                  typeof picture === "string" ? { uri: picture } : picture
                }
                style={styles.image}
                resizeMode="cover"
              />
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
            {hasEditButton && <EditButton text={'edit'}/>}
  </View>
)
export default ResourceCardImage;