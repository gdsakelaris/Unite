import React from 'react';
import { View, Pressable} from 'react-native';
import { Text } from 'react-native-paper';
import { switchToServiceOption } from '../functions';
import { serviceOption as styles } from '../css';
const ServiceOption = ({title, setdetailOption, detailOption, index}) => (
  <View style={[styles.serviceDetailOptionStyle, {borderBottomWidth: detailOption.optionTitle === title && 4}]}>
      <Pressable onPress={() => switchToServiceOption(setdetailOption, index)}>
        <Text style={styles.serviceDetailOptionTextStyle}>{title}</Text>
      </Pressable>
  </View>
  )

export default ServiceOption;