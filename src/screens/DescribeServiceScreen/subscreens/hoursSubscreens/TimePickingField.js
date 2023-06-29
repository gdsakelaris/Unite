import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { showDatePicker } from './functions';
import { hour as styles } from '../../css';
import { arrow_downIcon } from '../../icons';
import DropDownHour from './DropDownHour';


const TimePickingField = ({value}) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <View style={styles.timePickingFieldContainer}>
      <View style={styles.timePickingField}>
        <Text style={styles.displayedPickingTime}>{value}</Text>
      </View>
      <TouchableOpacity onPress={() => setOpenModal(showDatePicker())}>
        {arrow_downIcon}
      </TouchableOpacity>
      <DropDownHour visible={openModal} setVisible={setOpenModal}/>
    </View>
  )
}
export default TimePickingField;