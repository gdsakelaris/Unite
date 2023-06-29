import React from 'react';
import { View, ScrollView} from 'react-native';
import { Text } from 'react-native-paper';
import { serviceOptionDetail as styles } from '../css';
const ServiceOptionDetail = ({detailOption}) => (
  <View style={styles.serviceOptionDetail}> 
      <ScrollView>
        <Text >{detailOption && detailOption.detail}</Text>    
      </ScrollView>
  </View>
)
export default ServiceOptionDetail;