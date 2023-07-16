//this file will make a published button for the Third Step screen so the user can use it to publish their resource
import React from 'react';
import { Button} from 'react-native-paper';
import { btnSettings } from '../submitBtnProp';
import {Pressable} from "react-native";
const PublishedBtn = ({navigation}) => (
  <Button onPress={() => navigation.navigate('Published Message')} {...btnSettings}>
    Publish
  </Button>
)
export default PublishedBtn;