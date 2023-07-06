//this file will create the hour picking field 
import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import showDropDownHour from '../../../../utils/showDropDownHour';
import { hour as styles } from '../../css';
import { arrow_downIcon } from '../../icons';
import DropDownHour from './DropDownHour';
const TimePickingField = ({value}) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    // the box for time picking 
    <View style={styles.timePickingFieldContainer}>
      {/* The time picked in the dropdown hour   */}
      <View style={styles.timePickingField}>
        <Text style={styles.displayedPickingTime}>{value}</Text>
      </View>
      {/* the arrow down button for opening the dropdown hour */}
      <TouchableOpacity onPress={() => setOpenModal(showDropDownHour())}>
        {arrow_downIcon}
      </TouchableOpacity>
      {/* dropdown hour */}
      <DropDownHour visible={openModal} setVisible={setOpenModal}/>
    </View>
  )
}
export default TimePickingField;