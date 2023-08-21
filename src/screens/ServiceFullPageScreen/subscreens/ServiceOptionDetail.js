//this file will make an expanded view component that displays the detail information of the section that is clicked 
import React from 'react';
import { View, ScrollView} from 'react-native';
import { Text } from 'react-native-paper';
import { serviceOptionDetail as styles } from '../css';
import ResourceObjToJSX from '../listOfProvidedServiceDetail';
const ServiceOptionDetail = ({detailOption, resource}) => (
  <View style={styles.serviceOptionDetail}> 
      <ScrollView>
        {ResourceObjToJSX(detailOption, resource)}   
      </ScrollView>
  </View>
)
export default ServiceOptionDetail;