//this file will create the hour picking field 
import React, {useState} from 'react';
import { View, TouchableOpacity, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import showDropDownHour from '../../../../utils/showDropDownHour';
import { hour as styles } from '../../css';
import { arrow_downIcon} from '../../icons';
import DropDownHour from './DropDownHour';
import { useResourceContext } from '../../../../context/ResourceProvider';
const TimePickingField = ({type, operationalHour}) => {
  const {dispatch} = useResourceContext()
  //console.log(type, 'TimePickingField')
  return (
    // the box for time picking 
    <View style={styles.timePickingFieldContainer}>
      {/* Display the time picked in the dropdown hour   */}
      <View style={styles.timePickingField}>
        <Text style={styles.displayedPickingTime}>{operationalHour[type]}</Text>
      </View>
      {/* the arrow down button for opening the dropdown hour */}
      <TouchableOpacity onPress={() => {
        console.log(type, 'TimePickingField')
        showDropDownHour(operationalHour, dispatch)}}>
        {arrow_downIcon}
      </TouchableOpacity>
      {/* dropdown hour */}
      
    </View>
  )
}
export default TimePickingField;