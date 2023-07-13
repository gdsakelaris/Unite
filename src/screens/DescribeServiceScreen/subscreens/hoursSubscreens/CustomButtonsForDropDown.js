//This file will create a button component that will be rendered inside the dropdown hour
import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { hour as styles } from '../../css';
import { colors } from '../../../../base';
import { Button } from 'react-native-paper';
import hideDropDownHour from '../../../../utils/hideDropDownHour';
const CustomButtonsForDropDown = ({setDatePickerVisibility}) => (
  <View style={styles.dropDownHourButtonsContainer}>
      <Pressable
        mode='outlined'
        buttonColor={colors.white}
        style={styles.cancelButton}
        onPress={() => hideDropDownHour(setDatePickerVisibility)}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </Pressable>
      <Pressable
        mode='outlined'
        buttonColor={colors.white}
        style={styles.saveButton}
        onPress={() => hideDropDownHour(setDatePickerVisibility)}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
  </View>
  
)
export default CustomButtonsForDropDown;