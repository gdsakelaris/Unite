import React from 'react';
import { addBtn as styles } from '../css';
import { addIcon } from '../icons';
const AddBtn = () => (
  <TouchableOpacity style={styles.addbtn}>
    {addIcon}
    <Text style={styles.addbtntext}> Add </Text>
  </TouchableOpacity>
)
export default AddBtn;