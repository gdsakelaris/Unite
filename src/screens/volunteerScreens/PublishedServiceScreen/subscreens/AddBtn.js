/**
 * This component makes a add button for the PublishedService screen  
 * @param {Object} navigation navigation object that allows user to move to "Get Started" screen 
 */

import React, { useState } from 'react';
import { addBtn as styles } from '../css';
import { addIcon } from '../icons';
import { Pressable, Text } from 'react-native';
import { useResourceContext } from '../../../../context/ResourceProvider';
import clearResourceData from '../../../../utils/clearResourceData';
const AddBtn = ({ navigation }) => {
  const {dispatch} = useResourceContext()

  return (
    <Pressable
      style={styles.addbtn}
      onPress={() => {
          
          //Set the resource-state variable to initial value. The reason is the resource-state variable is used to store all the informations of the resource that user is about to create and the value of the resource-state variable will populate the Describe Service Screen. That's why, clearing or setting resource-state variable to its initial value is needed that it ensures the resource-state is clean before letting the user start putting new infos to it.  
          clearResourceData(dispatch)

          //Navigate to 'Get Started' screen to start the process of creating resource
          navigation.navigate('Get Started')
        }
        }
    >
      
      {addIcon}
      <Text style={styles.addbtntext}>Add</Text>
    </Pressable>
  );
};

export default AddBtn;
