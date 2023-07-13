//this file will make an add btn on the PublishedService screen so the user can publish their resources
import React, { useState } from 'react';
import { addBtn as styles } from '../css';
import { addIcon } from '../icons';
import { Pressable, Text } from 'react-native';

const AddBtn = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      style={[styles.addbtn, isPressed && styles.addbtnPressed]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => navigation.navigate('Get Started')}
    >
      {addIcon}
      <Text style={styles.addbtntext}>Add</Text>
    </Pressable>
  );
};

export default AddBtn;
