//make a edit button component for resource card
import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../css';
const EditButton = ({text}) => (
  <TouchableOpacity style = {styles.editbtn}>
      <Text style = {styles.edtbtntxt}>{text}</Text>
  </TouchableOpacity>
)
export default EditButton;