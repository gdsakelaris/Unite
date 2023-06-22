import React from 'react';
import { View } from 'react-native';
import { hour as styles } from '../../css';
import { colors } from '../../../../base';
import { Button } from 'react-native-paper';
import { hideDatePicker } from './functions';
const CustomButtonsForDropDown = ({setDatePickerVisibility}) => (
  <View style={styles.dropDownHourButtonsContainer}>
      <Button mode='outlined' buttonColor={colors.white} textColor={colors.lightdark} style={styles.cancelButton} labelStyle={styles.cancelButtonText} onPress={() => hideDatePicker(setDatePickerVisibility)}>Cancel</Button>
      <Button mode='outlined' buttonColor={colors.white} textColor={colors.white} style={styles.saveButton} labelStyle={styles.saveButtonText} onPress={() => hideDatePicker(setDatePickerVisibility)}>Save</Button>
  </View>
  
)
export default CustomButtonsForDropDown;