//this file will make an add btn on the PublishedService screen so the user can publish their resources
import React from 'react';
import { addBtn as styles } from '../css';
import { addIcon } from '../icons';
import { Button } from 'react-native-paper';
const AddBtn = ({navigation}) => (
  <Button style={styles.addbtn} onPress={() => navigation.navigate('Get Started')} contentStyle={styles.addbtnContent} labelStyle={styles.addbtntext}>
    {addIcon}
    Add
  </Button>
)
export default AddBtn;