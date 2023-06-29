import React from 'react';
import { View } from 'react-native';
import { hour as styles} from '../../css';
import TimePickingField from './TimePickingField';
import TitleForTimePickingField from './TitleForTimePickingField';
const TimePickingFieldForDay = ({day, openAt, closeAt}) => {
  return (
    <View style={styles.timePickingFieldForDayContainer}>
      <TitleForTimePickingField title={`${day}:`}/>
      <TimePickingField value={openAt}/>
      <TitleForTimePickingField title={'to'}/>
      <TimePickingField value={closeAt}/>
    </View>
  );
}
export default TimePickingFieldForDay;