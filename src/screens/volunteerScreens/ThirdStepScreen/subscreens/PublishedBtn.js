//this file will make a published button for the Third Step screen so the user can use it to publish their resource
import React from 'react';
import { Button} from 'react-native-paper';
import { btnSettings } from '../submitBtnProp';
const PublishedBtn = ({navigation}) => (
  <Button onPress={() => navigation.navigate('Published Message')} {...btnSettings}>
    Published
  </Button>
)
export default PublishedBtn;