//This file will create a button component that will be rendered inside the dropdown hour
import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { hour as styles } from '../../css';
import { colors } from '../../../../base';
import { useResourceContext } from '../../../../context/ResourceProvider';
import hideDropDownHour from '../../../../utils/hideDropDownHour';
import updateHour from '../../../../utils/updateHour';
const CustomButtonsForDropDown = ({operationalHour, type, pickedDate}) => {
  const {dispatch} = useResourceContext()
  // console.log(`Picking field for ${operationalHour.dayName} with type ${type}`)
  return (
    <View style={styles.dropDownHourButtonsContainer}>
        <Pressable
          mode='outlined'
          buttonColor={colors.white}
          style={styles.cancelButton}
          onPress={() => {
            //console.log(type)
            hideDropDownHour(operationalHour, dispatch, type)}
            }>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
        <Pressable
          mode='outlined'
          buttonColor={colors.white}
          style={styles.saveButton}
          onPress={() => {
            //console.log(type)
            updateHour(operationalHour, dispatch, type, pickedDate)}}>
          <Text style={styles.saveButtonText}>Save</Text>
        </Pressable>
    </View>
  )
}
export default CustomButtonsForDropDown;