//render the title message for screens which have title
import React from 'react';
//import { View} from 'react-native';
import { Text } from 'react-native-paper';
const ScreenTitle = ({titleMessage, style}) => (
  <Text variant='displayMedium' style={style}>{titleMessage}</Text>
)

export default ScreenTitle;