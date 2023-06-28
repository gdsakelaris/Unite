import React from 'react';
import { addBtn as styles } from '../css';
import { addIcon } from '../icons';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
const AddBtn = () => (
  <TouchableOpacity style={styles.addbtn}>
    {addIcon}
    <Text style={styles.addbtntext}> Add </Text>
  </TouchableOpacity>
)
export default AddBtn;