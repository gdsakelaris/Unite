import React from 'react';
import { Button, Text } from 'react-native-paper';
import { btnSettings } from '../submitBtnProp';
import { submitBtn as styles } from '../css';
const PublishedBtn = ({navigation}) => (
  <Button onPress={() => navigation.navigate('Published Message')} {...btnSettings}>
    <Text style={styles.publishBtnText}>Publish</Text>
  </Button>
)
export default PublishedBtn;