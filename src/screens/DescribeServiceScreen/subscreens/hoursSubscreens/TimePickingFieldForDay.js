//this file will create an container that stores the open time picking field and close time picking field for a single day
import React from 'react';
import { View } from 'react-native';
import { hour as styles} from '../../css';
import TimePickingField from './TimePickingField';
import TitleForTimePickingField from './TitleForTimePickingField';
const TimePickingFieldForDay = ({day, openAt, closeAt}) => {
  return (
    <View style={styles.timePickingFieldForDayContainer}>
      {/* Day */}
      <TitleForTimePickingField title={`${day}:`}/>
      {/* Hour Picking Field for Open Time  */}
      <TimePickingField value={openAt}/>
      {/* to */}
      <TitleForTimePickingField title={'to'}/>
      {/* Hour Picking Field for Close Time */}
      <TimePickingField value={closeAt}/>
    </View>
  );
}
export default TimePickingFieldForDay;