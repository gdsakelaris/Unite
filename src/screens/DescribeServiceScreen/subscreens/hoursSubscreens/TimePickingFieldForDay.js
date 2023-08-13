//this file will create an container that stores the open time picking field and close time picking field for a single day
import React, { useState } from 'react';
import { View, Pressable} from 'react-native';
import { hour as styles} from '../../css';
import { lock_closed_sharp, lock_open_sharp } from '../../icons';
import TimePickingField from './TimePickingField';
import TitleForTimePickingField from './TitleForTimePickingField';
const TimePickingFieldForDay = ({day, openAt, closeAt}) => {
  const [isClosed, setIsClosed] = useState(false)
  return (
    <View style={styles.timePickingFieldForDayContainer}>
      {/* Day */}
      <Pressable onPress={() => setIsClosed(prev => !prev)}>
        {isClosed ? lock_closed_sharp : lock_open_sharp}
      </Pressable>
      <TitleForTimePickingField title={`${day}:`}/>
      <View style={styles.openAndCloseHourContainer}>
        {/* Hour Picking Field for Open Time  */}
        <TimePickingField value={openAt}/>
        {/* to */}
        <TitleForTimePickingField title={'to'}/>
        {/* Hour Picking Field for Close Time */}
        <TimePickingField value={closeAt}/>
      </View>
    </View>
  );
}
export default TimePickingFieldForDay;