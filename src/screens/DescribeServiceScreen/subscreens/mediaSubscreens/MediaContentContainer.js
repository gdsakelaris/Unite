//a container that stores all the media options for provided resource
import React from 'react';
import { View} from 'react-native';
import { media as styles } from '../../css';
const MediaContentContainer = ({children}) => (
  <View style={styles.contentContainer}>
    {children}
  </View>
)
export default MediaContentContainer;